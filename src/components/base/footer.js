import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Footer() {
    return (
        <footer style={{backgroundColor: "#008da9", padding:'32px 0 32px 0'}}>
            <Container id={'footer'} className={'justify-content-center'}>
                <Row>
                    <Col md={4} style={{textAlign:'start'}}>
                        <span>© 2022 ООО Фармплас</span>
                    </Col>
                    <Col md={4} style={{textAlign:'center'}}>
                        <a className="me-3 tex-decor" href={'/#'}>Продукция</a>
                        <a className="me-3 tex-decor" href={'/#'}>Склады</a>
                        <a className="me-3 tex-decor" href={'/#'}>Контакты</a>
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