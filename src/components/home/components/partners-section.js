import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

function PartnersSection() {
    return (
        <div className="brands">
            <Container>
                <Row>
                    <Col>
                        <div className="brands_slider_container">
                            <div className="owl-carousel owl-theme brands_slider">
                                <div className="owl-item">
                                    <a href={'https://www.kazanorgsintez.ru/'}  target="_blank" className="brands_item d-flex flex-column justify-content-center">
                                        <img height={'100'}
                                            src="/images/partners/partner-1.png"
                                            alt=""/>
                                    </a>
                                </div>
                                <div className="owl-item">
                                    <div className="brands_item d-flex flex-column justify-content-center">
                                        <img height={'100'}
                                             src="/images/partners/partner-2.png"
                                             alt=""/></div>
                                </div>
                                <div className="owl-item">
                                    <div className="brands_item d-flex flex-column justify-content-center">
                                        <img height={'100'}
                                             src="/images/partners/partner-3.png"
                                             alt=""/></div>
                                </div>
                                <div className="owl-item">
                                    <div className="brands_item d-flex flex-column justify-content-center">
                                        <img height={'100'}
                                             src="/images/partners/partner-4.png"
                                             alt=""/></div>
                                </div>
                                <div className="owl-item">
                                    <div className="brands_item d-flex flex-column justify-content-center">
                                        <img height={'100'}
                                             src="/images/partners/partner-5.png"
                                             alt=""/></div>
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