import React from 'react';
import Container from "react-bootstrap/Container";
import {Card, Col, ListGroup, Placeholder, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from "./product_modal";

function ProductPage(){
    useEffect(() => {
        document.title = 'Фармпласт - Товары';
    });
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productId, setProductId] = useState(0);

    const [product, setProduct] = useState([]);

    const selections = new Map();

    const fetchData = () => {
        return fetch("https://api.farmplst.com/api/getAllCategories")
            .then((response) => response.json())
            .then(function (data) {
                const queryParams = new URLSearchParams(window.location.search)
                const ids = queryParams.get("category_ids")
                if(ids!==null && ids!=="") {
                    const ids1 = ids.split(',');
                    for (let i = 0; i < data.length; i++) {
                        for (let l = 0; l < ids1.length; l++) {
                            if(data[i].category_id==ids1[l]){
                                selections.set(data[i].category_id, true)
                            }
                        }
                    }
                }
                return setCategories(data);
            });
    }
    const fetchProducts = (idP) => {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                for (const  y of idP){
                    selections.delete(y)
                    if(x!=='' && x!==y){
                        selections.set(x, true);
                    }
                }
            }
        }

        let p = '';


        for (const  y of idP){
            selections.delete(y.toString())
        }
        for (let item of selections.keys()) {
            if(item!=null && item!=='' && item!==idP && selections.get(item)){
                p+=item+',';
            }
        }
        if(p!==''){
            window.history.replaceState(null, p, `/products/?category_ids=${p}`)
        }else {
            window.history.replaceState(null, p, `/products`)
        }
        console.log(p)
        return fetch("https://api.farmplst.com/api/getProductsByCategory?category_ids="+p)
            .then(function (response) {
                setLoading(false);
                return response.json();
            })
            .then(function (data) {
                fetchData()
                return setProducts(data);
            });
    }
    // function typeOf(obj) {
    //     return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
    // }
    function checkId(id) {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                if(x==id){
                    return true;
                }
            }
        }
        return false;
    }
    function checkIdGroup(category) {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        let i = 0;
        if(ids!==null && ids!=="" && category.subs!==undefined && category.subs!=null){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                for (const item of category.subs) {
                    if(x==item){
                        i++
                    }
                    if(i==category.subs.length){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    const fetchProduct = () => {
        fetch('https://api.farmplst.com/api/getProductById?id='+productId)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data[0]);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const ids = queryParams.get("category_ids")

        if(ids!==null && ids!==""){
            const ids1 = ids.split(',');
            for (const x of ids1) {
                if(x!==''){
                    selections.set(x, true);
                }
            }
        }
        fetchProducts([0]);
    },[])

    function handleOnChange(evt) {
        const target = evt.target;
        const checked = target.checked;
        // const name = target.name;
        const id = target.id;

        selections.set(id, checked)
        fetchProducts(checked?[0]:[id]);
    }
    function handleOnChangeGroup(evt, category) {
        const target = evt.target;
        const checked = target.checked;
        // const name = target.name;

        let ids = [];
        if(category.subs!==undefined && category.subs!=null){
            for (const item of category.subs){
                ids.push(item)
                selections.set(item, checked)
            }
        }
        fetchProducts(checked?[0]:ids);
    }
    // function removeItemOnce(arr, value) {
    //     const index = arr.indexOf(value);
    //     if (index > -1) {
    //         arr.splice(index, 1);
    //     }
    //     return arr;
    // }
    function getExtension(filename) {
        return filename.split(".").pop();
    }
    // const addtoCart = (product) => {
    //     this.setState({
    //         count: this.state.count + 1,
    //         cart: this.state.cart.concat(product)
    //     });
    //     console.log(this.state.cart);
    // };
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container id="products-section" className={'top-space'}>
            <Row>
                <Col lg="3">
                    <ListGroup>
                        {categories.length>0?
                            // eslint-disable-next-line array-callback-return
                            categories.sort((a,b)=>a.sort_order>b.sort_order?1:-1).map(function (category, index) {
                                if(category.parent_id===0){
                                    category.subs = [];
                                    // eslint-disable-next-line array-callback-return
                                    categories.map(function (inner, i) {
                                        if (category.category_id === inner.parent_id) {
                                            category.subs.push(inner.category_id)
                                        }})
                                    return [
                                        <ListGroup.Item style={{background:'#f8f9fa', fontWeight: "bold"}}>
                                            <Form.Check
                                                type={'checkbox'}
                                                id={category.category_id}
                                                data={category}
                                                label={category.name}
                                                checked={checkIdGroup(category)}
                                                onChange={function (event) {
                                                    handleOnChangeGroup(event, category)
                                                }}
                                            />
                                        </ListGroup.Item>,
                                        <ListGroup.Item>
                                            {/* eslint-disable-next-line array-callback-return */}
                                            {categories.map(function (inner, i) {
                                                if (category.category_id === inner.parent_id) {
                                                    return <Form.Check
                                                        type={'checkbox'}
                                                        id={inner.category_id}
                                                        label={inner.name}
                                                        checked={checkId(inner.category_id)}
                                                        onChange={handleOnChange}
                                                    />
                                                }
                                            })}
                                        </ListGroup.Item>
                                    ]
                                }
                            })
                            :
                            <ListGroup.Item eventKey={'0'} >
                                <Placeholder as={ListGroup.Item} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                            </ListGroup.Item>
                        }
                    </ListGroup>
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
                                            <Card className="card-hov" onClick={function () {
                                                setProductId(product.product_id);
                                                fetchProduct();
                                                return setModalShow(true);
                                            }}>
                                                <Card.Img className={'img-loading'} variant="top" src={'http://admin.farmplst.com/image/cache/'+ext}
                                                          onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src="/images/placeholder.webp";
                                                }} alt={product.name}/>
                                                <Card.Body>
                                                    <h6 style={{textAlign: "left"}}>{product.name}</h6>
                                                    <p style={{textAlign: "left"}}>Марка: {product.model}</p>
                                                    <p style={{textAlign: "left"}}>Производитель: {product.manufacturer}
                                                    </p>
                                                    <Button variant="primary custom-button" style={{width:'75%', borderRadius:'0px'}} href="/orders">
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
                id={productId}
                show={modalShow}
                product1 = {product}
                onHide={() => setModalShow(false)}
            />
    </Container>
    );
}


export default ProductPage;