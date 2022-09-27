import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export class ContactsPage extends React.Component {
    render() {
        return (
                <Container id="section-contacts">
                    <div style={{marginBottom: 40, marginTop: 40}}><h1 className="custom-bold-38" style={{textAlign: "left"}}>
                        Наши<span className="custom-bold-white">контакты</span></h1></div>
                    <Row >
                        <Col lg="6">
                            <br/>

                            <br/>
                            <p><b>Юридический адресс:</b> г. Санкт-Петербург, Лесной <br />проспект, д. 63 лит. А офис 402</p>
                            <p><b>Телефон: </b><a href={'+78123337438'}>+78123337438</a></p>
                            <p style={{marginLeft: 80}}><a href={'+78123338610'}> +78123338610</a></p>
                            <p><b>Почта:</b><a href={'farmplst@gmail.com'}>farmplst@gmail.com</a></p>
                            <p><b>Время работы:</b> 09:00 до 18:00</p>
                            <br/>
                            <p><b>Реквизиты:</b> Общество с ограниченной ответсвенностью <br />"ФАРМПЛАСТ" <br/> ИНН 7805074180 / КПП780501001<br/>
                                г. Санкт-Петербург, Лесной проспект, д. 63 лит. А офис 402<br/> P/C 40702810822000000276 "Cанкт-<br/>
                                Петербуркская Дирекция ОАО "Уралсиб" в г. Санкт-<br/> Петербурге, K/c 30101810800000000706, БИK<br/>
                                044030706</p>
                        </Col>
                        <Col lg="6">
                            <div id="section-contacts-email">
                                <div id="section-contacts-text">
                                    Компания Фармпласт готова<br/> представить помощь в выборе<br/> продукта и подходящего способа<br/> оплаты.
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