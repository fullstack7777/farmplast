import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {send} from "emailjs-com";
import Swal from "sweetalert2";
import CounterInput from "react-counter-input";

function OrdersPage () {
        useEffect(() => {
            document.title = 'Фармпласт - Заявка';
        });
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'sadyk.sapaev@gmail.com',
        from_mail: '',
        company: '',
        city: '',
        phone: '',
        reply_to: '',
        for_buy: 'Заявка на оформление',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_c7pclcq',
            'template_crz0u18',
            toSend,
            'Kd5hTZnsMrSH5nMAX'
        )
            .then((response) => {
                Swal.fire('Совсем скоро мы с Вами свяжемся', '', 'success');
                e.target.reset();
            })
            .catch((err) => {
                Swal.fire('Ошибка при отправке, попробуйте похже', '', 'error');
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
        return (
            <Container id="section-contacts">
                <div><h1 className="custom-bold-38">
                    Оформление <span className="custom-bold-white">заявки</span></h1></div>
                <Row >
                    <Col>
                        <div className="order-cards">
                            <div className="select-cart">
                                <input type="checkbox" />
                            </div>
                            <div className="cart-img-desc">
                                <div >
                                    <img className="cart-img" src="/images/image.webp" alt="Полимер"/>
                                </div>
                                <div className="cart-desc">
                                    <p>Полимер</p>
                                    <p>Марка: РР Н030</p>
                                    <p>Производитель: Компания Нефтехим, Республика Казахстан</p>
                                </div>
                            </div>
                            <div className="count-box">
                                <CounterInput
                                    min={0}
                                    max={100}
                                    onCountChange={count => console.log(count)}
                                />
                            </div>
                            <div className="cart-button-del" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                     className="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div id="section-contacts-order">
                            <div id="section-contacts-text">
                                Заполните данные для<br/> заявки на покупку<br/> выбранных (ного) товара (ров).
                            </div>
                            <Form id="section-contacts-form"
                                  onSubmit={onSubmit}
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваше имя"
                                                  name='from_name'
                                                  title='for_buy'
                                                  onChange={handleChange}
                                                  required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша почта"
                                                  name='from_mail'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша компания"
                                                  name='company'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваш город"
                                                  name='city'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="number" placeholder="Ваш телефон"
                                                  name='phone'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <button className="button-contacts" type="submit">
                                    Оставить заявку
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export default OrdersPage;