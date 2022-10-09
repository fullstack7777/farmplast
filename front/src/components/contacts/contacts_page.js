import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {send} from "emailjs-com";
import Swal from "sweetalert2";

function ContactsPage (){

        useEffect(() => {
            document.title = 'Фармпласт - Контакты';
        });
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'farmplst@gmail.com',
        from_mail: '',
        company: '',
        city: '',
        phone: '',
        reply_to: '',
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
                    <div><h1 className="custom-bold-38" style={{textAlign: "center"}}>
                        Наши <span className="custom-bold-white">контакты</span></h1></div>
                    <Row >
                        <Col lg="6">
                            <br/>
                            <br/>
                            <p><b>Юридический адресс:</b> г. Санкт-Петербург, Лесной <br />проспект, д. 63 лит. А офис 402</p>
                            <p><b>Телефон: </b><a href={'+79818338292'}>+7 (981) 833-82-92</a></p>
                            <p><b>Почта:</b><a href="mailto:farmplst@gmail.com">farmplst@gmail.com</a></p>
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
                                <Form id="section-contacts-form"
                                      onSubmit={onSubmit}
                                >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Ваше имя"
                                                      name='from_name'
                                                      onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Ваша почта"
                                                      mail='from_mail'
                                                      onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Ваша компания"
                                                      company='company'
                                                      onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Ваш город"
                                                      city='city'
                                                      onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="number" placeholder="Ваш телефон"
                                                      phone='phone'
                                                      onChange={handleChange}/>
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

export default ContactsPage;