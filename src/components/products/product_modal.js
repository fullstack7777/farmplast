import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from "react-bootstrap";
import React from "react";

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Row>
                    <Col>
                        <div className="bog-img">
                            <img id="img-big" src="/images/image.webp" alt="card_image2"/>
                            <div>
                            <Row style={{marginRight: 2}}>
                                <img id="img-small" src="/images/image.webp" alt="card_image2"/>
                                <img id="img-small" src="/images/image.webp" alt="card_image2"/>
                                <img id="img-small" src="/images/image.webp" alt="card_image2"/>
                                <img id="img-small" src="/images/image.webp" alt="card_image2"/>
                            </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>

                        <div className="product-box">
                            <h4>Полимер</h4>
                            <p>Артикул: SKU0001-2</p>
                            <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}} href="/orders">В корзину</Button>

                                <p style={{marginTop: 20, fontWeight: "bold"}}><span>Марка:</span> РР Н030</p>
                                <p><span style={{fontWeight: "bold"}}>Описание:</span> PP H030- гомополимер пропилена для производства изделий методами инжекционного формования, экструзи и термоформования. Продукт характеризуется средней текучестью и сбалансированными физико-механическими характеристиками. Метод переработки: Литьё, Экструзия
                                </p>
                            <p><span style={{fontWeight: "bold"}}>Сфера применения:</span> Игрушки, безнапорные внутридымовые трубыб нить а одноразовая посуда
                                </p>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;