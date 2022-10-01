import {useState, React} from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Placeholder, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../../products/product_modal";

function ProductsSection() {
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

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
                </Row>
            </Container>
        );
    }else if(products.length>0){
        return (
            <Container id={'products-section'} style={{paddingBottom: 60}}>
                <h1 className="custom-bold-38" style={{textAlign: "center", paddingBottom: 40}}>
                    <span className="custom-bold-white">Часто</span> покупаемые товары</h1>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <br/>
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col md="auto">
                        <Card className="card-hov" onClick={() => setModalShow(true)}>

                            <Card.Img variant="top" src="/images/image.webp" alt="card_image4" />
                            <Card.Body>
                                <h6 style={{textAlign: "left"}}>Полимер</h6>
                                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                </p>
                                <Button href="/orders" variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>В корзину</Button>
                            </Card.Body>
                        </Card>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductsSection;