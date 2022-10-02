import React from 'react';
import Container from "react-bootstrap/Container";
import {Accordion, Card, Col, Placeholder, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import AccordionItem from "react-bootstrap/AccordionItem";
import MyVerticallyCenteredModal from "./product_modal";

function ProductPage(){
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = () => {
        return fetch("https://api.farmplst.com/api/getAllCategories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }
    const fetchProducts = () => {
        setLoading(true);
        const p = selectedCategories.join(',');
        if(p!==''){
            window.history.replaceState(null, p, `/products/?category_ids=${p}`)
        }else {
            window.history.replaceState(null, p, `/products`)
        }
        return fetch("https://api.farmplst.com/api/getProductsByCategory?category_ids="+p)
            .then(function (response) {
                setLoading(false);
                return response.json();
            })
            .then(function (data) {
                return setProducts(data);
            });
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            setSelectedCategories(ids1);
        }
        fetchProducts();
        fetchData();
    },[])

    function handleOnChange(evt) {
        const target = evt.target;
        const checked = target.checked;
        // const name = target.name;
        const id = target.id;

        if(checked){
            if(!selectedCategories.some(it=>it===id)){
                selectedCategories.push(id);
            }
        }else {
            if(selectedCategories.some(it=>it===id)){
                setSelectedCategories(removeItemOnce(selectedCategories, id))
            }
        }
        fetchProducts();
    }
    function removeItemOnce(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container id="products-section" className={'top-space'}>
            <Row>
                <Col lg="3">
                    <Accordion alwaysOpen defaultActiveKey="0">
                        {categories.length>0?
                            // eslint-disable-next-line array-callback-return
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
                                                            onChange={handleOnChange}
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
                    {/*<div style={{fontWeight: "bold"}}>Продукты компании Нефтехим</div>*/}
                    {/*<div>ТОО «Компания Нефтехим LTD» — завод-производитель гранулированного полипропилена и мягкой полипропиленовой упаковки (мешки, биг-беги). Первый нефтехимический завод, построенный в Республике за годы независимости, стал одним их успешных прорывных проектов Казахстана.</div>*/}
                    {/*<div>Местонахождения: Республика Казахстан, город Павлодар </div>*/}
                    {/*<div>Год основания: 2005</div>*/}
                    {/*<div>Марки полипропилена: H030, H250, H350, H450 </div>*/}
                    {/*<div>Переходные марки: 2,5-45 птр </div>*/}
                    {/*<br/>*/}
                    {loading?
                        <Row>
                            <Col md="auto">
                                <Card className="card-hov">
                                    <Card.Img variant="top" src="/images/placeholder.webp" alt="loading" />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" className={'custom-button'} xs={6} />
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                            <Col md="auto">
                                <Card className="card-hov">
                                    <Card.Img variant="top" src="/images/placeholder.webp" alt="loading" />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" className={'custom-button'} xs={6} />
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                            <Col md="auto">
                                <Card className="card-hov">
                                    <Card.Img variant="top" src="/images/placeholder.webp" alt="loading" />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" className={'custom-button'} xs={6} />
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>

                        </Row>
                        :
                        <Row>
                            {
                                // eslint-disable-next-line array-callback-return
                                products.map(function (product, index) {
                                    let ext = getExtension(product.image);
                                    ext = product.image.replace('.'+ext,'-250x250.'+ext);
                                    return (
                                        <Col md="auto">
                                            <Card className="card-hov" onClick={() => setModalShow(true)}>
                                                <Card.Img variant="top" src={'http://admin.farmplst.com/image/cache/'+ext} alt={product.name}/>
                                                <Card.Body>
                                                    <h6 style={{textAlign: "left"}}>{product.name}</h6>
                                                    <p style={{textAlign: "left"}}>Марка: {product.model}</p>
                                                    <p style={{textAlign: "left"}}>Производитель: {product.manufacturer}
                                                    </p>
                                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}}>
                                                        Оставить заявку</Button>
                                                </Card.Body>
                                            </Card>
                                            <br/>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    }
                </Col>

            </Row>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
    </Container>
    );
}


export default ProductPage;