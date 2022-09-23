import React from 'react';
import Card from 'react-bootstrap/Card';

function CardBlock() {
    return (
        <div className="container">
            <h1 className="custom-bold-38" style={{textAlign: "left"}}><span className="custom-bold-white">Часто</span> покупаемые товары</h1>
            <div className="row">
        <Card style={{ width: '18rem', marginLeft: 20 , border: "none"}}>
            <Card.Img variant="top" src="../images/image1.jpg" />
            <Card.Body>
                <h6 style={{textAlign: "left"}}>Полимер</h6>
                <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                </p>
            </Card.Body>
        </Card>
                <Card style={{ width: '18rem', marginLeft: 20, border: "none" }}>
                    <Card.Img variant="top" src="../images/image1.jpg" />
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
                <Card style={{ width: '18rem', marginLeft: 20, border: "none"  }}>
                    <Card.Img variant="top" src="../images/image1.jpg" />
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
                <Card style={{ width: '18rem', marginLeft: 20, border: "none"  }}>
                    <Card.Img variant="top" src="../images/image1.jpg" />
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
            </div>
        </div>

    );
}

export default CardBlock;