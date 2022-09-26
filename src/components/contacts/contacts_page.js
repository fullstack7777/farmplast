import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export class ContactsPage extends React.Component {
    render() {
        return (
            <div>

                <Container id="section-contacts">
                    <Row>
                        <Col lg="4">
                            <br/>
                            <br/>
                            <p><span>Юридический адресс:</span> г. Санкт-Петербург, Лесной <br />проспект, д. 63 лит. А офис 402</p>
                            <p><span>Телефон:</span> +78182535353</p>
                            <p><span style={{fontWeight: "bold"}}>Почта:</span> Zabar12370@gmail.com</p>
                            <p><span style={{fontWeight: "bold"}}>Время работы:</span> 09:00 до 18:00</p>
                            <br/>
                            <p><span style={{fontWeight: "bold"}}>Реквизиты:</span> Общество с ограниченной ответсвенностью <br />"ФАРМПЛАСТ" <br/> ИНН 7805074180 / КПП780501001<br/>
                                г. Санкт-Петербург, Лесной проспект, д. 63 лит. А офис 402<br/> P/C 40702810822000000276 "Cанкт-<br/>
                                Петербуркская Дирекция ОАО "Уралсиб" в г. Санкт-<br/> Петербурге, K/c 30101810800000000706, БИK<br/>
                                044030706</p>
                        </Col>
                        <Col>
                            <div id="section-contacts-email">
                                <div id="section-contacts-text">
                                    Компания Фармпласт готова<br/> представить помощь в выборе<br/> продукта и подходящего способа<br/> оплаты.
                                </div>
                                <Form id="section-contacts-form">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Ваше имя" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Ваша почта" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Ваша компания" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Ваш город" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Ваш телефон" />
                                    </Form.Group>
                                    <button className="button-contacts">
                                        Оставить заявку
                                    </button>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}