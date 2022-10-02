import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function SubscribeSection() {
    return (
        <div id={'email-section'}>
           <Form>
               <Container>
                   <Row>
                       <h1 className="subscribe-section-h1">Компания фармпласт всегда готова предоставить помощь в выборе продукта и подходящего способа оплаты</h1>
                   </Row>
                   <Row className="justify-content-md-center" style={{marginTop:'32px'}}>
                       <Col xs lg="4">
                           <Form.Control type={'phone'} className={'mobileBox custom-input'} placeholder="Ваш телефон для связи" />
                       </Col>
                       <Col xs lg="3">
                           <Button variant="primary" className="custom-button" style={{width:'100%'}}>Получить консультацию</Button>{' '}
                       </Col>
                   </Row>
               </Container>
           </Form>
        </div>
    );
}

export default SubscribeSection;