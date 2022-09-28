import React from 'react';
import Container from "react-bootstrap/Container";
import {Accordion, Card, Col, Nav, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./product_modal";

function ProductPage(){

        const [modalShow, setModalShow] = React.useState(false);
        return (
        <Container id="products-section" className={'top-space'}>
            <Row>
                <Col lg="3">
                    <Accordion alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Сибур</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Полипропилен - ПП</Nav.Link>
                                <Nav.Link eventKey="link-2">Полиэтилен - ПЭ</Nav.Link>
                                <Nav.Link eventKey="link-2">Полистирол - ПСВ</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Нижнекамскнефтехим</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Полипропилен - ПП</Nav.Link>
                                <Nav.Link eventKey="link-2">Полистирол - ПСВ</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Казаньоргсинтез</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Полиэтилен - ПЭ</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Нефтехим Ltd</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Полипропилен - ПП</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Уфаоргсинтез</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Полипропилен - ПП</Nav.Link>
                                <Nav.Link eventKey="link-2">Полиэтилен - ПЭ</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Нафтан</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Полиэтилен - ПЭ</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Иностранные марки</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2"></Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br/>
                </Col>
                <Col lg="9">
                    <div style={{fontWeight: "bold"}}>Продукты компании Нефтехим</div>
                    <div>ТОО «Компания Нефтехим LTD» — завод-производитель гранулированного полипропилена и мягкой полипропиленовой упаковки (мешки, биг-беги). Первый нефтехимический завод, построенный в Республике за годы независимости, стал одним их успешных прорывных проектов Казахстана.</div>
                    <div>Местонахождения: Республика Казахстан, город Павлодар </div>
                    <div>Год основания: 2005</div>
                    <div>Марки полипропилена: H030, H250, H350, H450 </div>
                    <div>Переходные марки: 2,5-45 птр </div>
                    <br/>
                    <Row>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
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
                            <br/>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </Container>
    );
}


export default ProductPage;