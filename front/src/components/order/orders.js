import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {send} from "emailjs-com";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button';

function OrdersPage () {
    const cookies = new Cookies();
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");

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
    }, []);

    const product_email = products.map(function (product, index) {
        return product.name
    }).join(',');

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     send(
    //         'service_c7pclcq',
    //         'template_crz0u18',
    //         toSend,
    //         'Kd5hTZnsMrSH5nMAX'
    //     )
    //         .then((response) => {
    //             Swal.fire('Совсем скоро мы с Вами свяжемся', '', 'success');
    //             e.target.reset();
    //             cookies.remove('session')
    //         })
    //         .catch((err) => {
    //             Swal.fire('Ошибка при отправке, попробуйте похже', '', 'error');
    //         });
    // };
    function sendEmail() {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("to", "noreply@farmplst.com");
        urlencoded.append("subject", "Получена заявка");
        urlencoded.append("text", 'Имя: ' + name + ';\n' + 'Почта: ' + email + ';\n' + 'Компания: ' + company + ';\n' + 'Город: ' + city + ';\n' + 'Телефон номер: ' + phone + 'Товары: ' + product_email);
        urlencoded.append("html", 'Имя: ' + name + ';\n' + 'Почта: ' + email + ';\n' + 'Компания: ' + company + ';\n' + 'Город: ' + city + ';\n' + 'Телефон номер: ' + phone + 'Товары: ' + product_email);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("https://api.farmplst.com/api/sendEmail", requestOptions)
            .then((response) => {
                Swal.fire('Совсем скоро мы с Вами свяжемся', 'Благодарим за обращение', 'success');
                setName('');
                setEmail('');
                setCompany('');
                setCity('');
                setPhone('');
                cookies.reset();
                console.log('sent');
            })
            .catch((err) => {
                console.log(err)
                Swal.fire('Ошибка при отправке, попробуйте позже', '', 'error');
            });
    }
        // const handleChange = (e) => {
        //     setToSend({ ...toSend, [e.target.name]: e.target.value });
        // };
        return (
            <Container id="section-contacts">
                <div><h1 className="custom-bold-38">
                    Оформление <span className="custom-bold-white">заявки</span></h1></div>
                <Row>
                    <Col>
                        {
                            // eslint-disable-next-line array-callback-return
                            products.map(function (product, index) {
                                let ext = getExtension(product.image);
                                ext = product.image.replace('.' + ext, '-250x250.' + ext);
                                return (
                                    <div className="order-cards">
                                        <div className="cart-img-desc">
                                            <div>
                                                <img className={'img-loading'} style={{height: '120px', width: '120px'}}
                                                     src={'http://admin.farmplst.com/image/cache/' + ext}
                                                     onError={({currentTarget}) => {
                                                         currentTarget.onerror = null; // prevents looping
                                                         currentTarget.src = "/images/placeholder.webp";
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
                            <Form id="section-contacts-form">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  placeholder="Ваше имя"
                                                  value={name}
                                                  className={'mobileBox custom-input'}
                                                  onChange={(e => setName(e.target.value))}
                                                  required="true"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  placeholder="Ваша почта"
                                                  value={email}
                                                  className={'mobileBox custom-input'}
                                                  onChange={(e => setEmail(e.target.value))}
                                                  required="true"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  placeholder="Ваша компания"
                                                  className={'mobileBox custom-input'}
                                                  value={company}
                                                  onChange={(e => setCompany(e.target.value))}
                                                  required="true"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  placeholder="Ваш город"
                                                  className={'mobileBox custom-input'}
                                                  value={city}
                                                  onChange={(e => setCity(e.target.value))}
                                                  required="true"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='number'
                                                  phone='phone'
                                                  placeholder="Ваш телефон"
                                                  className={'mobileBox custom-input'}
                                                  value={phone}
                                                  onChange={(e => setPhone(e.target.value))}
                                                  required="true"/>
                                </Form.Group>
                                <Button className="button-contacts" onClick={() => {
                                    sendEmail()
                                }}>
                                    Оставить заявку
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export default OrdersPage;