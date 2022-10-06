import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from "react";

function PartnersSection() {
    return (
        <div className="brands">
            <Container fluid="md">
                <div>
                    <h1 className="custom-bold-40">
                        Наши <span className="custom-bold-white-40">партнеры</span></h1>
                </div>
                <Row>
                    <Col>
                        <div className="brands_slider_container">
                            <div className="owl-carousel owl-theme brands_slider">
                                <div className="owl-item">
                                    <a href={'https://www.kazanorgsintez.ru/'}  target="_blank" className="brands_item d-flex flex-column justify-content-center" rel="noreferrer">
                                        <img height={'72'}
                                            src={"/images/partners/partner-1.webp"}
                                            alt="kazanorgsinte"/>
                                    </a>
                                </div>
                                <div className="owl-item">
                                    <div className="brands_item d-flex flex-column justify-content-center">
                                        <a href={'https://www.nknh.ru/'}  target="_blank" className="brands_item d-flex flex-column justify-content-center" rel="noreferrer">
                                        <img height={'72'}
                                             src={"/images/partners/partner-3.webp"}
                                             alt="nknh"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="brands_item d-flex flex-column justify-content-center">
                                        <a href={'http://www.sibur.ru/ru/'}  target="_blank" className="brands_item d-flex flex-column justify-content-center" rel="noreferrer">
                                        <img height={'72'}
                                             src={"/images/partners/partner-5.webp"}
                                             alt="sibur"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="brands_nav brands_prev">
                                <FontAwesomeIcon icon={faChevronLeft}/>
                            </div>
                            <div className="brands_nav brands_next">
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default PartnersSection;