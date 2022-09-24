import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Email() {
    return (
        <div id={'email-section'}>
           <Form>
               <Container>
                   <Row>
                       <h1 style={{color: "white",}}>Компания фармпласть всегда готова предоставить помощь в выборе продукта и подходящего способа оплаты.</h1>
                   </Row>
                   <Row className="justify-content-md-center" style={{marginTop:'32px'}}>
                       <Col xs lg="4">
                           <Form.Control type={'email'} className={'custom-input'} placeholder="Email" />
                       </Col>
                       <Col xs lg="2">
                           <Button variant="primary" className="custom-button" style={{width:'100%'}}>Uytget</Button>{' '}
                       </Col>
                   </Row>
               </Container>
           </Form>
        </div>
    );
}

export default Email;