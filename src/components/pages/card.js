import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";

function CardBlock() {
    return (
        <Container style={{paddingBottom: 60}}>
            <h1 className="custom-bold-38" style={{textAlign: "center", paddingBottom: 40}}><span className="custom-bold-white">Часто</span> покупаемые товары</h1>
            <Row>
        <Card style={{ width: '17rem', marginLeft: 15 , border: "none"}}>
            <Card.Img variant="top" src="/images/image.webp" />
            <Card.Body>
                <h6 style={{textAlign: "left"}}>Полимер</h6>
                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                </p>
            </Card.Body>
        </Card>
                <Card style={{ width: '17rem', marginLeft: 15, border: "none" }}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <Card.Text style={{textAlign: "left"}}>
                            Марка: РР Н030
                        </Card.Text>
                        <Card.Text style={{textAlign: "left"}}>
                            Производитель: Компания Нефтехим, Республика Казахстан
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem', marginLeft: 15, border: "none"  }}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <Card.Text style={{textAlign: "left"}}>
                            Марка: РР Н030
                        </Card.Text>
                        <Card.Text style={{textAlign: "left"}}>
                            Производитель: Компания Нефтехим, Республика Казахстан
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem', marginLeft: 15, border: "none"  }}>
                    <Card.Img variant="top" src="/images/image.webp" />
                    <Card.Body>
                        <h6 style={{textAlign: "left"}}>Полимер</h6>
                        <Card.Text style={{textAlign: "left"}}>
                            Марка: РР Н030
                        </Card.Text>
                        <Card.Text style={{textAlign: "left"}}>
                            Производитель: Компания Нефтехим, Республика Казахстан
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default CardBlock;