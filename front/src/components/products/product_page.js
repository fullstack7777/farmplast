import React from 'react';
import Container from "react-bootstrap/Container";
import {Accordion, Card, Col, Placeholder, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./product_modal";
import {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import AccordionItem from "react-bootstrap/AccordionItem";

function ProductPage(){
    const [categories, setCategories] = useState([]);
    const fetchData = () => {
        return fetch("https://api.farmplst.com/api/getAllCategories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }
    useEffect(() => {
        fetchData();
    },[])
        const [modalShow, setModalShow] = React.useState(false);
        return (
        <Container id="products-section" className={'top-space'}>
            <Row>
                <Col lg="3">
                    <Accordion alwaysOpen defaultActiveKey="0">
                        {categories.length>0?
                            categories.sort((a,b)=>a.sort_order>b.sort_order?1:-1).map(function (category, index) {
                                    if(category.parent_id===0){
                                        return <Accordion.Item eventKey={category.category_id}>
                                            <Accordion.Header>
                                                {category.name}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {/* eslint-disable-next-line array-callback-return */}
                                                {categories.map(function (inner, i) {
                                                    if (category.category_id === inner.parent_id) {
                                                        return <Form.Check
                                                            type={'checkbox'}
                                                            id={inner.category_id}
                                                            label={inner.name}
                                                        />
                                                    }
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>;
                                    }
                                })
                            :
                            <AccordionItem eventKey={'0'} >
                                <Placeholder as={Accordion.Header} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Accordion.Body} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                            </AccordionItem>
                        }
                        {/* eslint-disable-next-line array-callback-return */}
                        </Accordion>
                    <br/>
                </Col>
                <Col lg="9">
                    <div style={{fontWeight: "bold"}}>Продукты компании Нефтехим</div>
                    <div>ТОО «Компания Нефтехим LTD» — завод-производитель гранулированного полипропилена и мягкой полипропиленовой упаковки (мешки, биг-беги). Первый нефтехимический завод, построенный в Республике за годы независимости, стал одним их успешных прорывных проектов Казахстана.</div>
                    <div>Местонахождения: Республика Казахстан, город Павлодар </div>
                    <div>Год основания: 2005</div>
                    <div>Марки полипропилена: H030, H250, H350, H450 </div>
                    <div>Переходные марки: 2,5-45 птр </div>
                    <br/>
                    <Row>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>

                                </Card.Body>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>

                                </Card.Body>
                            </Card>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>

                                </Card.Body>

                            </Card>
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>

                                </Card.Body>
                            </Card>
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>

                                </Card.Body>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </Card>
                            <br/>
                        </Col>
                        <Col md="auto">
                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                <Card.Img variant="top" src="/images/image.webp" alt="card_image1"/>
                                <Card.Body>
                                    <h6 style={{textAlign: "left"}}>Полимер</h6>
                                    <p style={{textAlign: "left"}}>Марка: РР Н030</p>
                                    <p style={{textAlign: "left"}}>Производитель: Компания Нефтехим, Республика Казахстан
                                    </p>
                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}
                                            onClick={() => setModalShow(true)}>Оставить заявку</Button>
                                </Card.Body>
                            </Card>
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                            <br/>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </Container>
    );
}


export default ProductPage;