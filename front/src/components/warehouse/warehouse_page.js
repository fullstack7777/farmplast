import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

export class WarehousePage extends React.Component {
    render() {
        return (
            <div className="warehouses">
                <h1 className="custom-bold-38" style={{textAlign: "center", paddingBottom: 40, marginTop: 40}}>
                    АДРЕСА НАШИХ <span className="custom-bold-white">СКЛАДОВ</span></h1>
                <Container>

                    <Row>
                        <Col>
                            <div className="warehouses_slider_container">
                                <div className="owl-carousel owl-theme warehouses_slider">
                                    <div className="owl-item">
                                        <Button variant="primary" data-index={'0'} className="ware-button">Склад в СПБ
                                        </Button>
                                    </div>
                                    <div className="owl-item">
                                        <Button variant="primary" data-index={'1'} className="ware-button">Склад в Новосибирске
                                        </Button>
                                    </div>
                                    <div className="owl-item">
                                        <Button variant="primary" data-index={'2'} className="ware-button">Склад в Москве
                                        </Button>
                                    </div>
                                    <div className="owl-item">
                                        <Button variant="primary" data-index={'3'} className="ware-button">Склад в Москве №2
                                        </Button>
                                    </div>
                                    <div className="owl-item">
                                        <Button variant="primary" data-index={'4'} className="ware-button">Склад в Уфе
                                        </Button>
                                    </div>
                                </div>
                                <div className="warehouses_nav brands_prev">
                                    <FontAwesomeIcon icon={faChevronLeft}/>
                                </div>
                                <div className="warehouses_nav brands_next">
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <div id={'ware-info'}/>
                        </Col>
                        <Col lg="8">
                            <div id="map"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}