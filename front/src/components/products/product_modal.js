import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from "react-bootstrap";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
                                        src="/images/image.webp"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block-modal w-100"
                                        src="/images/image.webp"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block-modal w-100"
                                        src="/images/image.webp"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        <Row>
                            <Col className="modal-picture-mini">
                           <img className="modal-picture-single" src="/images/image.webp"/>
                           <img className="modal-picture-single" src="/images/image.webp"/>
                           <img className="modal-picture-single" src="/images/image.webp"/>
                           <img className="modal-picture-single" src="/images/image.webp"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <h4>Полимер</h4>
                            <p>Артикул: SKU0001-2</p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}} href="/orders">В корзину</Button>

                            <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> РР Н030</p>
                            <p><span style={{fontWeight: "bold"}}>Описание:</span> PP H030- гомополимер пропилена для производства изделий методами инжекционного формования, экструзи и термоформования. Продукт характеризуется средней текучестью и сбалансированными физико-механическими характеристиками. Метод переработки: Литьё, Экструзия
                            </p>
                            <p><span style={{fontWeight: "bold"}}>Сфера применения:</span> Игрушки, безнапорные внутридымовые трубыб нить а одноразовая посуда
                            </p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button className="custom-button" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default MyVerticallyCenteredModal;