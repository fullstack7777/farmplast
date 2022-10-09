import React, {useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function CartsPage() {
    useEffect(() => {
        document.title = 'Фармпласт - Корзина';
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("session", "0040d80a9cc8dd3b9a19630117");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const getCart = () => {
        fetch("https://api.farmplst.com/api/getCarts", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
        return (
            <Container id="section-contacts">
                <div><h1 className="custom-bold-38">
                    Купить <span className="custom-bold-white">товар</span></h1></div>
                <Row >
                    <Col>
                        <div className="order-cards">
                            <div className="order-img"><img src="/images/image.webp" alt="Полимер"/></div>
                            <div className="order-detail">
                                <div>Полимер</div>
                                <div>Марка: РР Н030</div>
                                <div>Производитель: Компания Нефтехим, Республика Казахстан</div>
                            </div>
                        </div>
                        <div className="order-cards">
                            <div className="order-img"><img src="/images/image.webp" alt="Полимер"/></div>
                            <div className="order-detail">
                                <div>Полимер</div>
                                <div>Марка: РР Н030</div>
                                <div>Производитель: Компания Нефтехим, Республика Казахстан</div>
                            </div>
                        </div>
                        <div className="order-cards">
                            <div className="order-img"><img src="/images/image.webp" alt="Полимер"/></div>
                            <div className="order-detail">
                                <div>Полимер</div>
                                <div>Марка: РР Н030</div>
                                <div>Производитель: Компания Нефтехим, Республика Казахстан</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div id="section-contacts-order">
                            <div id="section-contacts-text">
                                Заполните данные для<br/> заявки на покупку<br/> выбранных (ного) товара (ров).
                            </div>
                            <Form id="section-contacts-form">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="number" placeholder="Ваше имя" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша почта" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша компания" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваш город" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваш телефон" />
                                </Form.Group>
                                <button className="button-contacts">
                                    Оставить заявку
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export default CartsPage;