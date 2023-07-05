import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
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

    function sendEmail() {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("to", "noreply@farmplst.com");
        urlencoded.append("subject", "Получена заявка");
        urlencoded.append(
            "text",
            "Имя: " +
            name +
            ";\n" +
            "Почта: " +
            email +
            ";\n" +
            "Компания: " +
            company +
            ";\n" +
            "Город: " +
            city +
            ";\n" +
            "Телефон номер: " +
            phone +
            "Товары: " +
            product_email
        );
        urlencoded.append(
            "html",
            'Имя: ' +
            name +
            ';\n Почта: '+ email +
            ';\n Компания: '+ company +
            ';\n Город: '+ city +
            ';\n Телефон номер: '+ phone +
            ';\n Товары: '+ product_email
        );

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
                cookies.remove('session', { path: '/', domain: '.farmplst.com' });
                console.log('sent');
            })
            .catch((err) => {
                console.log(err)
                Swal.fire('Ошибка при отправке, попробуйте позже', '', 'error');
            });
    }
    function htmlDecode(input){
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }
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
                                                <p>Производитель: <span style={{fontWeight: "normal"}} dangerouslySetInnerHTML={{__html: htmlDecode(product!==null?product.manufacturer:'')}}/></p>
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
                                                  name="name"
                                                  required={true}
                                                  value={name}
                                                  className={'mobileBox custom-input'}
                                                  onChange={(e => setName(e.target.value))}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  placeholder="Ваша почта"
                                                  email="email"
                                                  required={true}
                                                  value={email}
                                                  className={'mobileBox custom-input'}
                                                  onChange={(e => setEmail(e.target.value))}
                                                  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  placeholder="Ваша компания"
                                                  company="company"
                                                  className={'mobileBox custom-input'}
                                                  required={true}
                                                  value={company}
                                                  onChange={(e => setCompany(e.target.value))}
                                                  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='text'
                                                  city="city"
                                                  placeholder="Ваш город"
                                                  required={true}
                                                  className={'mobileBox custom-input'}
                                                  value={city}
                                                  onChange={(e => setCity(e.target.value))}

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type='phone'
                                                  phone='phone'
                                                  required={true}
                                                  placeholder="Ваш телефон"
                                                  className={'mobileBox custom-input'}
                                                  value={phone}
                                                  onChange={(e => setPhone(e.target.value))}
                                                  />
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