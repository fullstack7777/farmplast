import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CounterInput from "react-counter-input";
import Button from "react-bootstrap/Button";

function CartsPage() {
    useEffect(() => {
        document.title = 'Фармпласт - Корзина';
    });
    const [count, setCount] = useState(0);
    const onClickDec = () => {
        setCount(c => Math.max(c - 1, 0));
    };
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
                            <div className="cart-img-desc">
                                <div >
                                    <img className="cart-img" src="/images/image.webp" alt="Полимер"/>
                                </div>
                                <div className="cart-desc">
                                    <p>Полимер</p>
                                    <p>Марка: РР Н030</p>
                                    <p>Производитель: Компания Нефтехим, Республика Казахстан</p>
                                </div>
                            </div>
                            <div className="cart-button-del" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                     className="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div id="section-contacts-order">
                            <div className="cart-section-count">
                                <Row>
                                    <Col>
                                        <div className="orders-box-content">
                                            <div className="orders-box">
                                                <h4>Итого</h4>
                                                <h4>30шт</h4>
                                            </div>
                                            <hr/>
                                            <br/>
                                            <div className="orders-button">
                                                <Button className="button-contacts" href="/orders">
                                                    Оставить заявку
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export default CartsPage;