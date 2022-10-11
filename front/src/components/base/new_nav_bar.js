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
import {send} from "emailjs-com";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import React from "react";
import Cookie from 'universal-cookie'
import Carousel from "react-bootstrap/Carousel";

function NewNavBar() {
    const cookies = new Cookie();
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const [productLoading, setProductLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const fetchProduct = (product_id) => {
        setProductLoading(true);
        fetch('https://api.farmplst.com/api/getProductById?id='+product_id)
            .then((response) => response.json())
            .then((data) => {
                setProductLoading(false);
                setProduct(data[0]);
                console.log(data[0]);
                setModalShow(true);
            })
            .catch((err) => {
                setProductLoading(false);
                console.log(err.message);
            });
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
    function htmlDecode(input){
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    const [toSend, setToSend] = useState({
        name:'',
        phone: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_c7pclcq',
            'template_pnj15fp',
            toSend,
            'Kd5hTZnsMrSH5nMAX'
        )
            .then((response) => {
                Swal.fire('Совсем скоро мы с Вами свяжемся', '', 'success');
                handleClose();
                e.target.reset();
            })
            .catch((err) => {
                Swal.fire('Ошибка при отправке, попробуйте похже', '', 'error');
            });
    };
    const handleChange = (e) => {
        e.preventDefault();
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        setToSend({ ...toSend, [e.target.phone]: e.target.value });
    };
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
                <Navbar.Toggle aria-controls="navbarScroll" />
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
                                    mapCategories.set(category.name, 1);
                                    return <NavDropdown.Item href={'/products?category_ids='+category.category_id} >{category.name}</NavDropdown.Item>
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
                                fetchProduct(selected[0].id);
                            }}
                            options={options}
                            placeholder="Поиск по товарам"
                            className="me-2 custom-input"
                            labelKey="label"
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
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    className={'mobileBox custom-input'}
                                    onChange={handleChange}
                                    required
                                    placeholder="Имя"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    type='number'
                                    phone='phone'
                                    className={'mobileBox custom-input'}
                                    onChange={handleChange}
                                    required
                                    placeholder="+7"
                                />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Закрыть
                                </Button>
                                <Button className="custom-button" variant="primary" type="submit">
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
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block-modal w-100"
                                        src={'http://admin.farmplst.com/image/'+product.image}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src="/images/placeholder.webp";
                                        }}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Row>
                                <Col className="modal-picture-mini">
                                    {/*<img className="modal-picture-single" src={'http://admin.farmplst.com/image/'+ ext}/>*/}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h4>{product.name}</h4>
                            <p>{product.model}</p>
                            <div className="button-cart-buy">
                                <Button onClick={()=>addToCard(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Добавить в корзину</Button>
                                <Button onClick={()=>addRequest(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Заказать в один клик</Button>
                            </div>
                            <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> {product.tag}
                            </p>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>
                                <span>Производитель:</span> {product.manufacturer}</p>
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