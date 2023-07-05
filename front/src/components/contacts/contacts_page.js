import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';

function ContactsPage (){

        useEffect(() => {
            document.title = 'Фармпласт - Контакты';
        });


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");


    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     send(
    //         'service_c7pclcq',
    //         'template_crz0u18',
    //         toSend,
    //         'Kd5hTZnsMrSH5nMAX'
    //     )
    //         .then((response) => {
    //             Swal.fire('Совсем скоро мы с Вами свяжемся', '', 'success');
    //             e.target.reset();
    //         })
    //         .catch((err) => {
    //             Swal.fire('Ошибка при отправке, попробуйте похже', '', 'error');
    //         });
    // };
    function sendEmail() {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("to", "noreply@farmplst.com");
        urlencoded.append("subject", "Заявка с Наши Контакты");
        urlencoded.append(
            "text",
            "Имя: " +
            name +
            ";\n" +
            "Почта: " +
            email +
            ";\n" +
            "Компания: " +
            company +
            ";\n" +
            "Город: " +
            city +
            ";\n" +
            "Телефон номер: " +
            phone
        );
        urlencoded.append(
            "html",
            'Имя: ' +
            name +
            ';\n Почта: '+ email +
            ';\n Компания: '+ company +
            ';\n Город: '+ city +
            ';\n Телефон номер: '+ phone
        );

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.farmplst.com/api/sendEmail", requestOptions)
            .then((response) => {
                Swal.fire('Совсем скоро мы с Вами свяжемся', 'Благодарим за обращение', 'success');
                setName('');
                setEmail('');
                setCompany('');
                setCity('');
                setPhone('');
                console.log('sent');
            })
            .catch((err) => {
                console.log(err)
                Swal.fire('Ошибка при отправке, попробуйте позже', '', 'error');
            });
    }
    // const handleChange = (e) => {
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    // };
        return (
                <Container id="section-contacts">
                    <div><h1 className="custom-bold-38" style={{textAlign: "center"}}>
                        Наши <span className="custom-bold-white">контакты</span></h1></div>
                    <Row >
                        <Col lg="6" className="contact-right-left">
                            <br/>
                            <br/>
                            <p><b>Юридический адресс:</b> г. Санкт-Петербург, Лесной <br />проспект, д. 63 лит. А офис 402</p>
                            <p><b>Телефон: </b><a href={'tel:+78123378610'} target={'_blank'}>8 (812) 337-86-10</a> <br/> <a href={'tel:+79219432263'} target={'_blank'}>   8 (921) 943-22-63</a></p>
                            <p><b>Почта: </b><a> farmplst@gmail.com</a></p>
                            <p><b>Время работы:</b> 09:00 до 18:00</p>
                            <br/>
                            <p><b>Реквизиты:</b> Общество с ограниченной ответсвенностью <br />"ФАРМПЛАСТ" <br/> ИНН 7805074180 / КПП780501001<br/>
                                г. Санкт-Петербург, Лесной проспект, д. 63 лит. А офис 402<br/> P/C 40702810822000000276 "Cанкт-<br/>
                                Петербуркская Дирекция ОАО "Уралсиб" в г. Санкт-<br/> Петербурге, K/c 30101810800000000706, БИK<br/>
                                044030706</p>
                        </Col>
                        <Col lg="6" className="contact-right-box">
                            <div id="section-contacts-email">
                                <div id="section-contacts-text">
                                    Компания Фармпласт готова<br/> представить помощь в выборе<br/> продукта и подходящего способа<br/> оплаты.
                                </div>
                                <Form id="section-contacts-form">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type='text'
                                                      placeholder="Ваше имя"
                                                      value={name}
                                                      className={'mobileBox custom-input'}
                                                      onChange={(e => setName(e.target.value))}
                                                      required="true"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type='text'
                                                      placeholder="Ваша почта"
                                                      value={email}
                                                      className={'mobileBox custom-input'}
                                                      onChange={(e => setEmail(e.target.value))}
                                                      required="true"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type='text'
                                                      placeholder="Ваша компания"
                                                      className={'mobileBox custom-input'}
                                                      value={company}
                                                      onChange={(e => setCompany(e.target.value))}
                                                      required="true"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type='text'
                                                      placeholder="Ваш город"
                                                      className={'mobileBox custom-input'}
                                                      value={city}
                                                      onChange={(e => setCity(e.target.value))}
                                                      required="true"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control  type="phone"
                                                       phone="phone"
                                                      placeholder="Ваш телефон"
                                                      className={'mobileBox custom-input'}
                                                      value={phone}
                                                      onChange={(e => setPhone(e.target.value))}
                                                      required="true"/>
                                    </Form.Group>
                                    <Button className="button-contacts" onClick={()=>{sendEmail()}}>
                                        Оставить заявку
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
        );
}
export default ContactsPage;