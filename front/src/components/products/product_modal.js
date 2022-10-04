import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from "react-bootstrap";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useEffect, useState} from "react";


function MyVerticallyCenteredModal(props) {
    //const productId = props.id;
    const product = props.product1;
    // const [product, setProduct] = useState([]);

    // const fetchData = () => {
    //     fetch('https://api.farmplst.com/api/getProductById?id='+productId)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setProduct(data);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])
    console.log(product);
    if(product!==undefined){
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >{product.product_id}
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Карточка продукта
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block-modal w-100"
                                        src={product.image}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Row>
                                <Col className="modal-picture-mini">
                                    <img className="modal-picture-single" src={product.images}/>
                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <h4>{product.name}</h4>
                            <p>{product.model}</p>
                            <div className="button-cart-buy">
                                <Button className="button-cart" variant="primary custom-button"
                                        href="/orders">В
                                    корзину</Button>
                                <Button className="button-buy" variant="primary custom-button"
                                        href="/carts">Купить</Button>
                            </div>
                            <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> {product.tag}
                            </p>
                            <p style={{marginTop: 20, fontWeight: "bold"}}>
                                <span>Производитель:</span> {product.manufacturer}</p>
                            <p><span style={{fontWeight: "bold"}}>Описание:</span> {product.description}
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="custom-button" onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }else {
        return (<div></div>);
    }

}


export default MyVerticallyCenteredModal;