import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Modal, Row, Spinner} from "react-bootstrap";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import React from "react";
import Cookie from 'universal-cookie'
import Carousel from "react-bootstrap/Carousel";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


function NewNavBar() {
    const cookies = new Cookie();
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [images, setImages] = useState([]);
    const selections = new Map();

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setPhone(e.target.value);
    //     setName(e.target.value);
    //     e.target.reset();
    // };
    const [productLoading, setProductLoading] = useState(false);
    const [product, setProduct] = useState([]);

    const fetchProducts = () => {
        return fetch("https://api.farmplst.com/api/getPopularProducts")
            .then(function (response) {
                setLoading(false);
                return response.json();
            })
            .then(function (data) {
                return setProducts(data);
            });
    }
    const fetchProduct = (product_id) => {
        setProductLoading(true);
        fetch('https://api.farmplst.com/api/getProductById?id='+product_id)
            .then((response) => response.json())
            .then((data) => {
                setProductLoading(false);
                setProduct(data[0]);
                setModalShow(true);
                handleImages();
            })
            .catch((err) => {
                setProductLoading(false);
                console.log(err.message);
            });
    }
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    function handleImages(){
        let b = "https://admin.farmplst.com/image/"+product.image;
        let ext = getExtension(product.image);
        let sTh = product.image.replace('.'+ext,'-250x250.'+ext);
        let img1 = 'https://admin.farmplst.com/image/cache/'+sTh;
        let imgs = [
            {
                original: b,
                thumbnail: img1,
                originalHeight:1000,
                originalWidth:1000,
            },
        ]

        if(product.images!==undefined && product.images!=null){
            // eslint-disable-next-line array-callback-return
            product.images.split(';').map((function (item, _){
                console.log(item)
                let ext = getExtension(item);
                let sTh = item.replace('.'+ext,'-250x250.'+ext);
                imgs.push({
                    original: "https://admin.farmplst.com/image/"+item,
                    thumbnail:  "https://admin.farmplst.com/image/"+item,
                    originalHeight:1000,
                    originalWidth:1000,
                })
            }))
        }
        setImages(imgs);

        // // eslint-disable-next-line array-callback-return
        // products.map(function (product1, index) {
        //     let b = "https://admin.farmplst.com/image/" + (product1.image);
        //     let ext = getExtension(product1.image);
        //     let sTh = product1.image.replace('.' + ext, '-250x250.' + ext);
        //     let img1 = 'https://admin.farmplst.com/image/cache/' + sTh;
        //
        //     let imgs = [
        //         {
        //             original: b,
        //             thumbnail: img1,
        //             originalHeight: 1000,
        //             originalWidth: 1000,
        //         },
        //     ]
        //     if (product.images !== undefined && product.images != null) {
        //         product.images.split(';').map((function (item, _) {
        //             imgs.push({
        //                 original: "https://admin.farmplst.com/image/" + item,
        //                 thumbnail: "https://admin.farmplst.com/image/" + item,
        //                 originalHeight: 1000,
        //                 originalWidth: 1000,
        //             })
        //         }))
        //     }
        //     console.log(product.images);
        //     setImages(imgs);
        // })
    }
    function htmlDecode(input){
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }
    function createSession(id, callback){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.farmplst.com/api/newSession", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                const r = JSON.parse(result)
                cookies.set('session',r.session, {maxAge:86000, path: '/'});
                callback(id);
            })
            .catch(error => console.log('error', error));
    }
    function addRequest(id){
        let session = cookies.get('session');
        if(session==null){
            createSession(id, function (id) {
                addRequest(id)
            });
        }else {
            addToCarts(id, '/orders');
        }
    }
    function addToCard(id) {
        let session = cookies.get('session');
        if(session==null){
            createSession(id, function (id) {
                addToCard(id)
            });
        }else {
            addToCarts(id, null);
        }
    }
    function addToCarts(id, toLink=null) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("session", cookies.get('session'));
        urlencoded.append("quantity", "1");
        urlencoded.append("product_id", id);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.farmplst.com/api/addCard", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                if(result){
                    if(toLink!=null){
                        window.location.href=toLink;
                    }else {
                        setModalShow(false)
                    }
                }
            })
            .catch(error => console.log('error', error));
    }

        if(window.location.pathname!=='/' && window.location.pathname!=='/#'){
            // eslint-disable-next-line no-undef
            $(".navbar").css("background" , "").addClass('bg-light');
            // eslint-disable-next-line no-undef
            $(".navbar").removeClass('navbar-dark');
            // eslint-disable-next-line no-undef
            $(".navbar").addClass('navbar-light');

        }
        if(window.location.pathname=='/' && window.location.pathname!=='/#'){
            // eslint-disable-next-line no-undef
            $('.navbar-brand  img').attr('src', 'images/logo2.webp');
            // eslint-disable-next-line no-undef
            $(".nav-link").addClass('nav-bar-white');
        }
    // eslint-disable-next-line no-undef
            let scroll = $(window).scrollTop();
    // eslint-disable-next-line no-undef
    let width = $(window)
    // eslint-disable-next-line no-undef
    if(window.location.pathname==='/' || window.location.pathname==='/#'){


                if (scroll > 500) {
                    // eslint-disable-next-line no-undef
                    $(".navbar").css("background" , "").addClass('bg-light');
                    // eslint-disable-next-line no-undef
                    $('.navbar-brand  img').attr('src', 'images/logo.webp');
                    // eslint-disable-next-line no-undef
                    $(".navbar").removeClass('navbar-dark');
                    // eslint-disable-next-line no-undef
                    $(".navbar").addClass('navbar-light');
                    // eslint-disable-next-line no-undef
                    $(".nav-link").removeClass('nav-bar-white');

                }else{
                    // eslint-disable-next-line no-undef
                    $('.navbar-brand  img').attr('src', 'images/logo2.webp');
                    // eslint-disable-next-line no-undef
                    $(".navbar").removeClass('bg-light');
                    // eslint-disable-next-line no-undef
                    $(".navbar").removeClass('navbar-light');
                    // eslint-disable-next-line no-undef
                    $(".navbar").addClass('navbar-dark');
                    // eslint-disable-next-line no-undef
                    $(".nav-link").addClass('nav-bar-white');
                }
            }

    // eslint-disable-next-line no-undef
    function changeToggle() {
        let result = (!opened) ? (
            // eslint-disable-next-line no-undef
            $(".navbar").css("background" , "").addClass('bg-light'),
            // eslint-disable-next-line no-undef
            $('.navbar-brand  img').attr('src', 'images/logo.webp'),
            // eslint-disable-next-line no-undef
            $(".navbar").removeClass('navbar-dark'),
            // eslint-disable-next-line no-undef
            $(".navbar").addClass('navbar-light'),
            // eslint-disable-next-line no-undef
            $(".nav-link").removeClass('nav-bar-white')
    ):(
            // eslint-disable-next-line no-undef
            $('.navbar-brand  img').attr('src', 'images/logo2.webp'),
            // eslint-disable-next-line no-undef
            $(".navbar").removeClass('bg-light'),
            // eslint-disable-next-line no-undef
            $(".navbar").removeClass('navbar-light'),
            // eslint-disable-next-line no-undef
            $(".navbar").addClass('navbar-dark'),
            // eslint-disable-next-line no-undef
            $(".nav-link").addClass('nav-bar-white')
    );
        return result;
        setOpened(!opened)
    }

    function handleOnChangeGroup(evt, category) {
        const target = evt.target;
        const checked = target.checked;
        // const name = target.name;

        let ids = [];
        if(category.subs!==undefined && category.subs!=null){
            for (const item of category.subs){
                ids.push(item)
                selections.set(item, checked)
            }
        }
        fetchProducts(checked?[0]:ids);
    }

    function sendEmail() {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("to", "noreply@farmplst.com");
        urlencoded.append("subject", "Заказать звонок");
        urlencoded.append("text",  'Имя: '+ name + ';\nТелефон номер: "'+ phone);
        urlencoded.append("html", 'Имя: ' + name + ';\nТелефон номер: "'+ phone);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("https://api.farmplst.com/api/sendEmail", requestOptions)
            .then((response) => {
                Swal.fire('Совсем скоро мы с Вами свяжемся',  'Благодарим за обращение', 'success');
                handleClose();
                console.log('sent')
            })
            .catch((err) => {
                console.log(err)
                Swal.fire('Ошибка при отправке, попробуйте позже', '', 'error');
            });
    }
    let mapCategories = new Map();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fetchData = () => {
        return fetch("https://api.farmplst.com/api/getAllCategories")
            .then((response) => response.json())
            .then(function (data) {
                mapCategories.clear();
                return setCategories(data);
            });
    }
    const fetchOptions = () => {
        return fetch("https://api.farmplst.com/api/query?q=")
            .then((response) => response.json())
            .then(function (data) {
                return setOptions(data);
            });
    }
    useEffect(() => {
        fetchOptions();
        fetchData();
    },[])
    return (
        <Navbar fixed="top" scrolling expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/images/logo.webp"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={()=>changeToggle()} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        // style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="nav-bar-lg" href="/" >Главная</Nav.Link>
                        <NavDropdown className="nav-bar-lg" title="Продукция" id="navbarScrollingDropdown">
                            {/* eslint-disable-next-line array-callback-return */}
                            {categories.map(function (category, index){
                                if(category.parent_id!==0 && !mapCategories.has(category.name)){
                                    mapCategories.set(category.name, 0);
                                    return <NavDropdown.Item href={'/products?category_ids='+category.category_id} key={index}>{category.name}</NavDropdown.Item>
                                }}
                            )}
                        </NavDropdown>
                        <Nav.Link className="nav-bar-lg" href="/warehouses" >Склады</Nav.Link>
                        <Nav.Link className="nav-bar-lg" href="/contacts" >Контакты</Nav.Link>

                    </Nav>
                    <Form className="d-flex search search-nav">
                        {/*<Form.Control*/}
                        {/*    type="search"*/}
                        {/*    placeholder="Поиск по товарам"*/}
                        {/*    className="me-2 custom-input"*/}
                        {/*    aria-label="Search"*/}
                        {/*/>*/}
                        <Typeahead
                            id="basic-example"
                            onChange={(selected) => {
                                try {
                                        fetchProduct(selected[0].id);
                                    } catch (err) {
                                    console.log(err)
                                }
                            }}
                            options={options}
                            placeholder="Поиск по товарам"
                            className="me-2 custom-input"
                            labelKey={option => `${option.label} открыть товар`}
                            style={{width:'90%'}}
                        />
                        {/*<Button variant="primary">Заказать звонок</Button>*/}
                    </Form>
                    <Button variant="primary" className="custom-button call-button-lg" onClick={handleShow}>Заказать звонок</Button>
                    <Button variant="primary" className="custom-button call-button" onClick={handleShow}><FontAwesomeIcon icon={faPhone}/></Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        animation={false}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header>
                            <h4 className="modal-h4">Заполните необходимые данные и наши менеджеры свяжутся с Вами в ближайшее время.</h4>
                        </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={(e => setName(e.target.value))}
                                    className={'mobileBox custom-input'}
                                    required={true}
                                    placeholder="Имя"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    type='number'
                                    phone='phone'
                                    value={phone}
                                    onChange={(e => setPhone(e.target.value))}
                                    className={'mobileBox custom-input'}
                                    required={true}
                                    placeholder="+7"
                                />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Закрыть
                                </Button>
                                <Button className="custom-button" required={true} variant="primary" onClick={()=>{sendEmail()}}>
                                    Оставить заявку
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                    </Modal>
                    <Button variant="primary" className="button-cart" href="/carts"><img src="/images/cart.webp" height ="20" width="20" alt="cart"/></Button>
                </Navbar.Collapse>
            </Container>
            <Modal
                show={modalShow}
                product1 = {product}
                onHide={() => setModalShow(false)}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Карточка продукта
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <ImageGallery
                                items={images}
                                showNav={false}
                                showPlayButton={false}
                                lazyLoad={true}
                                showIndex={true}
                            />
                        </Col>
                        <Col>
                            <h4>{product.name}</h4>
                            <br/>
                            {/*<p>{product.model}</p>*/}
                            <div className="button-cart-buy">
                                <Button onClick={()=>addToCard(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Добавить в корзину</Button>
                                <Button onClick={()=>addRequest(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Заказать в один клик</Button>
                            </div>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>Марка: <span style={{fontWeight: "normal"}}>{product.model}</span>
                            </p>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>
                                Производитель: <span style={{fontWeight: "normal"}} dangerouslySetInnerHTML={{__html: htmlDecode(product.manufacturer)}}></span> </p>
                            <div><span style={{fontWeight: "bold"}}>Описание:</span>
                                <div style={{display:'grid', fontSize:'13px'}} dangerouslySetInnerHTML={{__html: htmlDecode(product.description)}}/>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="custom-button" onClick={()=>setModalShow(false)}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={productLoading}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <span> Загрузка...</span>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}
export default NewNavBar;