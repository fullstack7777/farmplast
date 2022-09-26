import React from 'react';
import Container from "react-bootstrap/Container";
import {Accordion, Card, Col, Nav, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export class ProductPage extends React.Component {
    render() {
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
                                <Nav.Link eventKey="link-2">Тип продукции</Nav.Link>
                                <Nav.Link eventKey="link-2">Тип продукции активный</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Нефтехим</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Тип продукции</Nav.Link>
                                <Nav.Link eventKey="link-2">Тип продукции активный</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Уфаорг</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Тип продукции</Nav.Link>
                                <Nav.Link eventKey="link-2">Тип продукции активный</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Нижнекам</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Тип продукции</Nav.Link>
                                <Nav.Link eventKey="link-2">Тип продукции активный</Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <Nav.Link eventKey="link-1">Сокар</Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link eventKey="link-2">Тип продукции</Nav.Link>
                                <Nav.Link eventKey="link-2">Тип продукции активный</Nav.Link>
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
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image2"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image3"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image4"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image5" />
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" />
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" />
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                                <Card.Img variant="top" src="/images/image.webp" />
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Оставить заявку</Button>
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
}


