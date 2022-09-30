import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Footer() {
    return (
        <footer style={{backgroundColor: "#008da9", padding:'42px 0 42px 0'}}>
            <Container id={'footer'} className={'justify-content-center'}>
                <Row>
                    <Col md={4} style={{textAlign:'start'}}>
                        <span>© {new Date().getFullYear()} ООО Фармпласт</span>
                    </Col>
                    <Col md={4} style={{textAlign:'center'}}>
                        <a className="me-3 nav-bar-white" href={'/products'}>Продукция</a>
                        <a className="me-3 nav-bar-white" href={'/warehouses'}>Склады</a>
                        <a className="me-3 nav-bar-white" href={'/contacts'}>Контакты</a>
                    </Col>
                    <Col md={4} style={{textAlign:'end'}}>
                        <a href={'/#'}>Вернуться на верх страницы</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;