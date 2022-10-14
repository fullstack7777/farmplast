import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Modal, Placeholder, ListGroup, Row, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import Carousel from "react-bootstrap/Carousel";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


function ProductsSection() {
    const cookies = new Cookies();
    const [modalShow, setModalShow] = React.useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const selections = new Map();

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
    useEffect(() => {
        fetchProducts();
    },[])
    function handleOnChange(evt) {
        const target = evt.target;
        const checked = target.checked;
        // const name = target.name;
        const id = target.id;

        selections.set(id, checked)
        fetchProducts(checked?[0]:[id]);
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
        setImages(imgs)
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

    function getExtension(filename) {
        return filename.split(".").pop();
    }

    if(loading){
        return (
            <Container style={{paddingBottom: 60}}>
                <h1 className="custom-bold-38" style={{textAlign: "center", paddingBottom: 40}}>
                    <span className="custom-bold-white">Часто</span> покупаемые товары</h1>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card className="card-hov">
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
                            <Card.Img variant="top" src="/images/placeholder.webp" alt="card_image4" />
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
            </Container>
        );
    }else if(products.length>0){
        function getExtension(filename) {
            return filename.split(".").pop();
        }
        return (
            <Container id={'products-section'} style={{paddingBottom: 60}}>
                <h1 className="custom-bold-38" style={{textAlign: "center", paddingBottom: 40}}>
                    <span className="custom-bold-white">Часто</span> покупаемые товары</h1>
                <Row className="justify-content-md-center">
                    {
                        // eslint-disable-next-line array-callback-return
                        products.map(function (product, index) {
                            let ext = getExtension(product.image);
                            ext = product.image.replace('.'+ext,'-250x250.'+ext);
                            return (
                                <Col md="auto">
                                    <Card className="card-hov">
                                        <Card.Img onClick={function () {
                                            fetchProduct(product.product_id);
                                        }} className={'img-loading'} variant="top" src={'http://admin.farmplst.com/image/cache/'+ext}
                                                  onError={({ currentTarget }) => {
                                                      currentTarget.onerror = null; // prevents looping
                                                      currentTarget.src="/images/placeholder.webp";
                                                  }} alt={product.name}/>
                                        <Card.Body onClick={function () {
                                            fetchProduct(product.product_id);
                                        }}>
                                            <h6 style={{textAlign: "left", color: '#343434', fontWeight: "bold"}}>{product.name}</h6>
                                            <p style={{textAlign: "left"}}>Марка: {product.model}</p>
                                            <p style={{textAlign: "left"}}>Производитель: {product.manufacturer}</p>
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
                                <ImageGallery items={images} showNav={false} showPlayButton={false}/>
                                {/*<Carousel>*/}
                                {/*    <Carousel.Item>*/}
                                {/*        <img*/}
                                {/*            className="d-block-modal w-100"*/}
                                {/*            src={'http://admin.farmplst.com/image/'+product.image}*/}
                                {/*            onError={({ currentTarget }) => {*/}
                                {/*                currentTarget.onerror = null; // prevents looping*/}
                                {/*                currentTarget.src="/images/placeholder.webp";*/}
                                {/*            }}*/}
                                {/*            alt={product.image}*/}
                                {/*        />*/}
                                {/*    </Carousel.Item>*/}
                                {/*</Carousel>*/}
                                {/*<Row>*/}
                                {/*    {*/}
                                {/*        // eslint-disable-next-line array-callback-return*/}
                                {/*        product.images!==undefined && product.images!=null?product.images.split(';').map((function (item, i) {*/}
                                {/*                return (*/}
                                {/*                        <img className="modal-picture-single"*/}
                                {/*                             src={'http://admin.farmplst.com/image/'+item}*/}
                                {/*                             onError={({ currentTarget }) => {*/}
                                {/*                                 currentTarget.onerror = null; // prevents looping*/}
                                {/*                                 currentTarget.src="/images/placeholder.webp";*/}
                                {/*                             }}*/}
                                {/*                             alt={item}*/}
                                {/*                        />*/}
                                {/*                );*/}
                                {/*            }))*/}
                                {/*            :*/}
                                {/*            ''*/}
                                {/*    }*/}
                                {/*</Row>*/}
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
        )
    }
}

export default ProductsSection;