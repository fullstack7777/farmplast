import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {send} from "emailjs-com";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

function OrdersPage () {
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
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    useEffect(() => {
        document.title = 'Фармпласт - Заявка';
        getCards();
    },[]);

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'sadyk.sapaev@gmail.com',
        from_mail: '',
        company: '',
        city: '',
        phone: '',
        products:products.map(function (product, index) {return product.name}).join(','),
        reply_to: '',
        for_buy: 'Заявка на оформление',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_c7pclcq',
            'template_crz0u18',
            toSend,
            'Kd5hTZnsMrSH5nMAX'
        )
            .then((response) => {
                Swal.fire('Совсем скоро мы с Вами свяжемся', '', 'success');
                e.target.reset();
            })
            .catch((err) => {
                Swal.fire('Ошибка при отправке, попробуйте похже', '', 'error');
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
        return (
            <Container id="section-contacts">
                <div><h1 className="custom-bold-38">
                    Оформление <span className="custom-bold-white">заявки</span></h1></div>
                <Row >
                    <Col>
                        {
                            // eslint-disable-next-line array-callback-return
                            products.map(function (product, index) {
                                let ext = getExtension(product.image);
                                ext = product.image.replace('.'+ext,'-250x250.'+ext);
                                return (
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
                                    </div>
                                );
                            })
                        }

                    </Col>
                    <Col lg="6">
                        <div id="section-contacts-order">
                            <div id="section-contacts-text">
                                Заполните данные для<br/> заявки на покупку<br/> выбранных (ного) товара (ров).
                            </div>
                            <Form id="section-contacts-form"
                                  onSubmit={onSubmit}
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваше имя"
                                                  name='from_name'
                                                  title='for_buy'
                                                  onChange={handleChange}
                                                  required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша почта"
                                                  name='from_mail'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваша компания"
                                                  name='company'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Ваш город"
                                                  name='city'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="number" placeholder="Ваш телефон"
                                                  name='phone'
                                                  onChange={handleChange}
                                                  required/>
                                </Form.Group>
                                <button className="button-contacts" type="submit">
                                    Оставить заявку
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export default OrdersPage;