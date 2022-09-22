import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Button, Card} from "react-bootstrap";
import './index.css';

export class HomePage extends React.Component {
    render() {
        return (
            <div style={{backgroundImage:'url("/images/section1.png")',backgroundSize:'cover', width:'100%', height:'500px'}}>
                <Container>
                    <Row>
                        <Col xs={2}/>
                        <Col xs={8} md={6} style={{marginTop:'120px'}}>
                            <h5 style={{textAlign:'left', color:'white'}}>ewjfjn wkefnjwjkenfwejnf
                                <br/>ewfwefefvererf wrverf wrf w we wef
                                <br/>rgerge rgergersdsvd gregerg</h5>
                            <br/>
                            <Row>
                                <Col md="auto">
                                    <Button variant="primary">Podrobnoye o proizvodstve</Button>{' '}
                                </Col>
                                <Col md="auto">
                                    <Button variant="light">Pereyti k katalogu</Button>{' '}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
              </Container>
            </div>
            // <img src='/images/section1.png' style={{height:'500px',width:'100%', objectFit:'cover'}}
            //      className='img-fluid shadow-4' alt='...' />

        );
    }
}