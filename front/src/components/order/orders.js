import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {send} from "emailjs-com";
import Swal from "sweetalert2";

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
                               <div className="order-img-orders"><img src="/images/image.webp" alt="Полимер"/></div>
                               <div className="order-detail">
                                   <div>Полимер</div>
                                   <div>Марка: РР Н030</div>
                                   <div>Производитель: Компания Нефтехим, Республика Казахстан</div>
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