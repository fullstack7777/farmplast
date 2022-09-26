import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export class ContactsPage extends React.Component {
    render() {
        return (
                <Container id="section-contacts">
                    <Row>
                        <Col lg="4">
                            <br/>
                            <br/>
                            <p><b>Юридический адресс:</b> г. Санкт-Петербург, Лесной <br />проспект, д. 63 лит. А офис 402</p>
                            <p><b>Телефон:</b><a href={'+78182535353'}>+78182535353</a></p>
                            <p><b>Почта:</b><a href={'Zabar12370@gmail.com'}>Zabar12370@gmail.com</a></p>
                            <p><b>Время работы:</b> 09:00 до 18:00</p>
                            <br/>
                            <p><b>Реквизиты:</b> Общество с ограниченной ответсвенностью <br />"ФАРМПЛАСТ" <br/> ИНН 7805074180 / КПП780501001<br/>
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
                                        <Form.Control type="name" placeholder="Ваше имя" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Ваша почта" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="company" placeholder="Ваша компания" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="city" placeholder="Ваш город" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="phone" placeholder="Ваш телефон" />
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