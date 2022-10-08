import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';

function SubscribeSection() {
    const [toSend, setToSend] = useState({
        from_name: 'noreply@farmplst.com',
        to_name: 'farmplst@gmail.com',
        message: '',
        reply_to: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_c7pclcq',
            'template_pnj15fp',
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
    const handleClick = () => {
        setToSend("");
    };
    return (
        <div id={'email-section'}>
           <Form onSubmit={onSubmit}>
               <Container>
                   <Row>
                       <h1 className="subscribe-section-h1">Компания Фармпласт всегда готова предоставить помощь в выборе продукта и подходящего способа оплаты</h1>
                   </Row>
                   <Row className="justify-content-md-center" style={{marginTop:'32px'}}>
                       <Col xs lg="4">
                           <Form.Control
                               type='number'
                               name='to_name'
                               value={toSend.to_name}
                               className={'mobileBox custom-input'}
                               onChange={handleChange}
                               placeholder="Ваш телефон для связи" />
                       </Col>
                       <Col xs lg="3">
                           <Button type="submit" onClick={() => handleClick()} variant="primary" className="custom-button" style={{width:'100%'}}>Получить консультацию</Button>
                       </Col>
                   </Row>
               </Container>
           </Form>
        </div>
    );
}

export default SubscribeSection;