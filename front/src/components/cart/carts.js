import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Cookies from 'universal-cookie';

function CartsPage() {
    const cookies = new Cookies();
    const [products, setProducts] = useState([]);
    function getCards() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("session", cookies.get('session'));

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.farmplst.com/api/getCarts", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                let r = JSON.parse(result);
                return setProducts(r);
            })
            .catch(error => console.log('error', error));
    }
    function delCard(id) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("session", cookies.get('session'));
        urlencoded.append("id", id);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.farmplst.com/api/delCart", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                getCards();
            })
            .catch(error => console.log('error', error));
    }
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    useEffect(() => {
        document.title = 'Фармпласт - Корзина';
        getCards();
    },[]);
        return (
            <Container id="section-contacts">
                <div><h1 className="custom-bold-38">
                    Купить <span className="custom-bold-white">товар</span></h1></div>
                <Row >
                    <Col>
                        {
                            // eslint-disable-next-line array-callback-return
                            products.map(function (product, index) {
                                let ext = getExtension(product.image);
                                ext = product.image.replace('.'+ext,'-250x250.'+ext);
                                return(
                                    <div className="order-cards">
                                        <div className="cart-img-desc">
                                            <div >
                                                <img className={'img-loading'} style={{height:'120px', width:'120px'}} src={'http://admin.farmplst.com/image/cache/'+ext}
                                                          onError={({ currentTarget }) => {
                                                              currentTarget.onerror = null; // prevents looping
                                                              currentTarget.src="/images/placeholder.webp";
                                                          }} alt={product.name}/>
                                            </div>
                                            <div className="cart-desc">
                                                <p>{product.name}</p>
                                                <p>Марка: {product.model}</p>
                                                <p>Производитель: {product.manufacturer}</p>
                                            </div>
                                        </div>
                                        <div onClick={()=>delCard(product.cart_id)} className="cart-button-del" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                                 className="bi bi-trash" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Col>
                    {products.length > 0 ?
                        <Col lg="3">
                            <div id="section-contacts-order">
                                <div className="cart-section-count">
                                    <Row>
                                        <Col>
                                            <div className="orders-box-content">
                                                <div className="orders-box">
                                                    <h4>Итого</h4>
                                                    <h4>{products.length} шт</h4>
                                                </div>
                                                <hr style={{width: '100'}}/>
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
                    :
                        <Col lg="3">
                            <div id="section-contacts-order">
                                <div className="cart-section-count">
                                    <Row>
                                        <Col>
                                            <div className="orders-box-content">
                                                <div className="orders-box">
                                                    <h4>Заказ отсутсвует</h4>
                                                    <h4>0 шт</h4>
                                                </div>
                                                <hr style={{width: '100'}}/>
                                                <br/>

                                                <div className="orders-button">
                                                    <Button className="button-contacts" href="/products">
                                                        Перейти к выбору продуктов
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        );
}
export default CartsPage;