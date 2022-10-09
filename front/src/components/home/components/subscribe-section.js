import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';

function SubscribeSection() {
    const [toSend, setToSend] = useState({
        phone:'',
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
                Swal.fire('Ошибка при отправке, попробуйте позже', '', 'error');
            });
        setToSend('');

    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: '' });
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
                               name='phone'
                               className={'mobileBox custom-input'}
                               onChange={handleChange}
                               required
                               placeholder="Ваш телефон для связи"
                           />
                       </Col>
                       <Col xs lg="3">
                           <Button type="submit" variant="primary" className="custom-button" style={{width:'100%'}}>Получить консультацию</Button>
                       </Col>
                   </Row>
               </Container>
           </Form>
        </div>
    );
}

export default SubscribeSection;