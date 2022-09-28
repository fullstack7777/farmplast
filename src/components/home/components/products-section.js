import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../../products/product_modal";

function ProductsSection() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container id={'products-section'} style={{paddingBottom: 60}}>
            <h1 className="custom-bold-38" style={{textAlign: "center", paddingBottom: 40}}>
                <span className="custom-bold-white">Часто</span> покупаемые товары</h1>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image2"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image3"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image4"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center" style={{marginTop: 40}}>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image2"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image3"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className="card-hov">
                        <Card.Img variant="top" src="/images/image.webp" alt="card_image4"/>
                        <Card.Body>
                            <h6 style={{textAlign: "left"}}>Полимер</h6>
                            <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                            <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                            </p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                    onClick={() => setModalShow(true)}>Оставить заявку</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default ProductsSection;