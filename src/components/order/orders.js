import React from 'react';
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export class OrdersPage extends React.Component {
    render() {
        return (
            <Container id="section-contacts">
                <div style={{marginBottom: 80, marginTop: 40}}><h1 className="custom-bold-38" style={{textAlign: "center"}}>
                    Оформление<span className="custom-bold-white">завки</span></h1></div>
                <Row >
                    <Col>
                       <Row >
                           <div id="orders-page">
                          <div >
                              <Card  id="oreders-page-card">
                                  <Card.Body>
                                      <div style={{display: "inline-block"}}><img src="/images/image.webp" alt="Полимер"/>
                                      </div>
                                      <div style={{display: "inline-block"}}>
                                          <div style={{width: 200, marginLeft: 20}}>
                                              <h6 style={{textAlign: "left"}}>Полимер</h6>
                                              <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                              <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                              </p>
                                          </div>
                                      </div>
                                  </Card.Body>
                              </Card>
                              <Card  id="oreders-page-card">
                                  <Card.Body>
                                      <div style={{display: "inline-block"}}><img src="/images/image.webp" alt="Полимер"/>
                                      </div>
                                      <div style={{display: "inline-block"}}>
                                          <div style={{width: 200, marginLeft: 20}}>
                                              <h6 style={{textAlign: "left"}}>Полимер</h6>
                                              <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                              <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                              </p>
                                          </div>
                                      </div>
                                  </Card.Body>
                              </Card>
                              <Card>
                                  <Card.Body  id="oreders-page-card">
                                      <div style={{display: "inline-block"}}><img src="/images/image.webp" alt="Полимер"/>
                                      </div>
                                      <div style={{display: "inline-block"}}>
                                          <div style={{width: 200, marginLeft: 20}}>
                                              <h6 style={{textAlign: "left"}}>Полимер</h6>
                                              <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                              <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                              </p>
                                          </div>
                                      </div>
                                  </Card.Body>
                              </Card>
                          </div>

                           </div>
                       </Row>


                    </Col>
                    <Col lg="6">
                        <div id="section-contacts-order">
                            <div id="section-contacts-text">
                                Заполните данные для<br/> заявки на покупку<br/> выбранных (ного) товара (ров).
                            </div>
                            <Form id="section-contacts-form">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваше имя" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша почта" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша компания" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваш город" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваш телефон" />
                                </Form.Group>
                                <button className="button-contacts">
                                    Оставить заявку
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}