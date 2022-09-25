import React from 'react';
import Sidebar from "./sidebar";
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export class ProductPage extends React.Component {
    render() {
        return (
        <Container id="products-page">
            <Col>
                <Sidebar/>
            </Col>
            <div style={{fontWeight: "bold"}}>Продукты компании Нефтехим</div>
        <div>ТОО «Компания Нефтехим LTD» — завод-производитель гранулированного полипропилена и мягкой полипропиленовой упаковки (мешки, биг-беги). Первый нефтехимический завод, построенный в Республике за годы независимости, стал одним их успешных прорывных проектов Казахстана.</div>
        <div>Местонахождения: Республика Казахстан, город Павлодар </div>
        <div>Год основания: 2005</div>
        <div>Марки полипропилена: H030, H250, H350, H450 </div>
        <div>Переходные марки: 2,5-45 птр </div>
        <br/>
        <Row>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                        <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                        </p>
                        <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>


    );
    }
}


