import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

function SubscribeSection() {
    const [phone, setPhone] = useState("");
    const handleChange = (e) => {
        setPhone(e.target.value);
    };
function sendEmail () {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("to", "noreply@farmplst.com");
    urlencoded.append("subject", "Получить консультацию");
    urlencoded.append("text", 'Телефон номер: '+ phone);
    urlencoded.append("html", 'Телефон номер: '+ phone);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    fetch("https://api.farmplst.com/api/sendEmail", requestOptions)
        .then((response) => {
            Swal.fire('Совсем скоро мы с Вами свяжемся', 'Благодарим за обращение', 'success');
            console.log('sent')
        })
        .catch((err) => {
            console.log(err)
            Swal.fire('Ошибка при отправке, попробуйте позже', '', 'error');
        });
}

    return (
        <div id={'email-section'}>
           <Form onSubmit={()=>{sendEmail()}}>
               <Container>
                   <Row>
                       <h1 className="subscribe-section-h1">Компания Фармпласт всегда готова предоставить помощь в выборе продукта и подходящего способа оплаты</h1>
                   </Row>
                   <Row className="justify-content-md-center" style={{marginTop:'32px'}}>
                       <Col xs lg="4">
                           <Form.Control
                               type='number'
                               value={phone}
                               onChange={handleChange}
                               required
                               className={'mobileBox custom-input'}
                               phone='phone'
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