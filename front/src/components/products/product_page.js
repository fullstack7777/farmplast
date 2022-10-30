import React from 'react';
import Container from "react-bootstrap/Container";
import {Card, Col, FormLabel, ListGroup, Modal, Placeholder, Row, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Cookie from 'universal-cookie';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useState, useEffect } from 'react';
function ProductPage(){
    useEffect(() => {
        document.title = 'Фармпласт - Товары';
    });

    const cookies = new Cookie();

    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productLoading, setProductLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);
    const selections = new Map();

    const fetchData = () => {
        return fetch("https://api.farmplst.com/api/getAllCategories")
            .then((response) => response.json())
            .then(function (data) {
                const queryParams = new URLSearchParams(window.location.search)
                const ids = queryParams.get("category_ids")
                if(ids!==null && ids!=="") {
                    const ids1 = ids.split(',');
                    for (let i = 0; i < data.length; i++) {
                        for (let l = 0; l < ids1.length; l++) {
                            if(data[i].category_id==ids1[l]){
                                selections.set(data[i].category_id, true)
                            }
                        }
                    }
                }
                return setCategories(data);
            });
    }
    const fetchProducts = (idP) => {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                for (const  y of idP){
                    selections.delete(y)
                    if(x!=='' && x!==y){
                        selections.set(x, true);
                    }
                }
            }
        }

        let p = '';


        for (const  y of idP){
            selections.delete(y.toString())
        }
        for (let item of selections.keys()) {
            if(item!=null && item!=='' && item!==idP && selections.get(item)){
                p+=item+',';
            }
        }
        if(p!==''){
            window.history.replaceState(null, p, `/products/?category_ids=${p}`)
        }else {
            window.history.replaceState(null, p, `/products`)
        }
        console.log(p)
        return fetch("https://api.farmplst.com/api/getProductsByCategory?category_ids="+p)
            .then(function (response) {
                setLoading(false);
                return response.json();
            })
            .then(function (data) {
                fetchData()
                return setProducts(data);
            });
    }

    function checkId(id) {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                if(x==id){
                    return true;
                }
            }
        }
        return false;
    }
    function checkIdGroup(category) {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        let i = 0;
        if(ids!==null && ids!=="" && category.subs!==undefined && category.subs!=null){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                for (const item of category.subs) {
                    if(x==item){
                        i++
                    }
                    if(i==category.subs.length){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    function getExtension(filename) {
        return filename?.split(".").pop();
    }
    function handleImages(product){
        if(product != null && product.image!=null){
            let b = "https://admin.farmplst.com/image/" + (product.image);
            let ext = getExtension(product.image);
            let sTh = product.image.replace('.' + ext, '-250x250.' + ext);
            let img1 = 'https://admin.farmplst.com/image/cache/' + sTh;

            let imgs = [
                {
                original: b,
                thumbnail: img1,
                originalHeight: 1000,
                originalWidth: 1000,
            },
            ]
            if (product.images != null) {
                product.images.split(';').map((function (item, _) {
                    imgs.push({
                        original: "https://admin.farmplst.com/image/" + item,
                        thumbnail: "https://admin.farmplst.com/image/" + item,
                        originalHeight: 1000,
                        originalWidth: 1000,
                    })
                }))
                        }
                        console.log(product.images);
                        setImages(imgs);
                    }
                }

    const fetchProduct = (product_id) => {
        setProductLoading(true);
        fetch('https://api.farmplst.com/api/getProductById?id='+product_id)
            .then((response) => response.json())
            .then((data) => {
                setProductLoading(false);
                setProduct(data[0]);
                handleImages(data[0]);
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
                        setProduct(null)
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


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                if(x!==''){
                    selections.set(x, true);
                }
            }
        }
        fetchProducts([0]);
    },[])

    function handleOnChange(evt) {
        const target = evt.target;
        const checked = target.checked;
        // const name = target.name;
        const id = target.id;

        selections.set(id, checked)
        fetchProducts(checked?[0]:[id]);
    }
    // function handleOnChangeGroup(evt, category) {
    //     const target = evt.target;
    //     const checked = target.checked;
    //     // const name = target.name;
    //
    //     let ids = [];
    //     if(category.subs!==undefined && category.subs!=null){
    //         for (const item of category.subs){
    //             ids.push(item)
    //             selections.set(item, checked)
    //         }
    //     }
    //     fetchProducts(checked?[0]:ids);
    // }


    return (
        <Container id="products-section" className={'top-space'}>
            <Row>
                <Col lg="3">
                    <ListGroup>
                        {categories.length>0?
                            // eslint-disable-next-line array-callback-return
                            categories.sort((a,b)=>a.sort_order>b.sort_order?1:-1).map(function (category, index) {
                                if(category.parent_id===0){
                                    category.subs = [];
                                    // eslint-disable-next-line array-callback-return
                                    categories.map(function (inner, i) {
                                        if (category.category_id === inner.parent_id) {
                                            category.subs.push(inner.category_id)
                                        }})
                                    return [
                                        <ListGroup.Item style={{background:'#f8f9fa', fontWeight: "bold", color: '#343434'}} key={index}>
                                            {/*<Form.Check*/}
                                            {/*    type={'checkbox'}*/}
                                            {/*    id={category.category_id}*/}
                                            {/*    data={category}*/}
                                            {/*    label={category.name}*/}
                                            {/*    checked={checkIdGroup(category)}*/}
                                            {/*    onChange={function (event) {*/}
                                            {/*        handleOnChangeGroup(event, category)*/}
                                            {/*    }}*/}
                                            {/*/>*/}
                                            <FormLabel>
                                                {category.name}
                                            </FormLabel>
                                        </ListGroup.Item>,
                                        <ListGroup.Item>
                                            {/* eslint-disable-next-line array-callback-return */}
                                            {categories.map(function (inner, i) {
                                                if (category.category_id === inner.parent_id) {
                                                    return <Form.Check
                                                        type={'checkbox'}
                                                        id={inner.category_id}
                                                        label={inner.name}
                                                        checked={checkId(inner.category_id)}
                                                        onChange={handleOnChange}
                                                        key={i}
                                                    />
                                                }
                                            })}
                                        </ListGroup.Item>
                                    ]
                                }
                            })
                            :
                            <ListGroup.Item eventKey={'0'} >
                                <Placeholder as={ListGroup.Item} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                            </ListGroup.Item>
                        }
                    </ListGroup>
                    <br/>
                </Col>
                <Col lg="9">
                    {loading?
                        <Row>
                            <Col md="auto">
                                <Card className="card-hov">
                                    <Card.Img variant="top" src="/images/placeholder.webp" alt="loading" />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" className={'custom-button'} xs={6} />
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                            <Col md="auto">
                                <Card className="card-hov">
                                    <Card.Img variant="top" src="/images/placeholder.webp" alt="loading" />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" className={'custom-button'} xs={6} />
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                            <Col md="auto">
                                <Card className="card-hov">
                                    <Card.Img variant="top" src="/images/placeholder.webp" alt="loading" />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" className={'custom-button'} xs={6} />
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                        </Row>
                        :
                        <Row>
                            {
                                // eslint-disable-next-line array-callback-return
                                products.map(function (product, index) {
                                    let ext = getExtension(product.image);
                                    ext = product.image.replace('.'+ext,'-250x250.'+ext);
                                    return (
                                        <Col md="auto" key={index}>
                                            <Card className="card-hov" >
                                                <Card.Img onClick={function () {
                                                    // setProductId(product.product_id);
                                                    fetchProduct(product.product_id);
                                                }} className={'img-loading'} variant="top" src={'http://admin.farmplst.com/image/cache/'+ext}
                                                          onError={({ currentTarget }) => {
                                                              currentTarget.onerror = null; // prevents looping
                                                              currentTarget.src="/images/placeholder.webp";
                                                          }} alt={product.name}/>
                                                <Card.Body  className="card-body" onClick={function () {
                                                    // setProductId(product.product_id);
                                                    fetchProduct(product.product_id);
                                                }}>
                                                    <p className="card-text-name">{product.name}</p>
                                                    <p className="card-text-name">Марка: <span style={{fontWeight: "normal"}}>{product.model}</span></p>
                                                    <p className="card-text-name" >Производитель: <span style={{fontWeight: "normal"}} dangerouslySetInnerHTML={{__html: htmlDecode(product.manufacturer)}}></span></p>
                                                </Card.Body>
                                                <Card.Footer style={{backgroundColor:'transparent', borderTop:'none', padding:'0 0 16px 16px'}}>
                                                    <Button onClick={()=>addRequest(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>
                                                        Оставить заявку</Button>
                                                </Card.Footer>
                                            </Card>
                                            <br/>
                                        </Col>
                                    );

                                })
                            }
                        </Row>
                    }
                </Col>
            </Row>
            <Modal
                show={modalShow}
                product1 = {product}
                onHide={function () {
                    setProduct(null);
                    return setModalShow(false);
                }}
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
                            <ImageGallery items={images}
                                          showNav={false}
                                          showPlayButton={false}
                                          lazyLoad={true}
                                          showIndex={true}
                            />

                            {/*<img*/}
                            {/*    className="d-block-modal w-100"*/}
                            {/*    src={'http://admin.farmplst.com/image/'+product.image}*/}
                            {/*    onError={({ currentTarget }) => {*/}
                            {/*        currentTarget.onerror = null; // prevents looping*/}
                            {/*        currentTarget.src="/images/placeholder.webp";*/}
                            {/*    }}*/}
                            {/*    alt={product.image}*/}
                            {/*/>*/}
                            {/*<Row>*/}
                            {/*        {*/}
                            {/*            // eslint-disable-next-line array-callback-return*/}
                            {/*            product.images!==undefined && product.images!=null?product.images.split(';').map((function (item, i) {*/}
                            {/*                    return (*/}
                            {/*                        <img className="modal-picture-single"*/}
                            {/*                             src={'http://admin.farmplst.com/image/'+item}*/}
                            {/*                             onError={({ currentTarget }) => {*/}
                            {/*                                 currentTarget.onerror = null; // prevents looping*/}
                            {/*                                 currentTarget.src="/images/placeholder.webp";*/}
                            {/*                             }}*/}
                            {/*                             alt={item}*/}
                            {/*                        />*/}
                            {/*                    );*/}
                            {/*                }))*/}
                            {/*                :*/}
                            {/*                ''*/}
                            {/*        }*/}
                            {/*</Row>*/}
                        </Col>
                        <Col>
                            <h4>{product!==null?product.name:''}</h4>
                            <br/>
                            {/*<p>{product.model}</p>*/}
                            <div className="button-cart-buy">
                                <Button onClick={()=>addToCard(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Добавить в корзину</Button>
                                <Button onClick={()=>addRequest(product.product_id)} variant="primary custom-button" style={{width:'75%', borderRadius:'0px', marginBottom: 20,marginLeft: 20}}>Заказать в один клик</Button>
                            </div>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>Марка: <span style={{fontWeight: "normal"}}>{product!==null?product.model:''} </span>
                            </p>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>Производитель: <span style={{fontWeight: "normal"}} dangerouslySetInnerHTML={{__html: htmlDecode(product!==null?product.manufacturer:'')}}/></p>
                            <div><span style={{fontWeight: "bold"}}>Описание:</span>
                                <div style={{display:'grid', fontSize:'13px'}} dangerouslySetInnerHTML={{__html: htmlDecode(product!==null?product.description:'')}}/>
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
                size="sm"
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

        </Container>
    );
}


export default ProductPage;