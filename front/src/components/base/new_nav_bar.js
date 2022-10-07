import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal} from "react-bootstrap";


function NewNavBar() {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fetchData = () => {
        return fetch("https://api.farmplst.com/api/getAllCategories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }
    useEffect(() => {
        fetchData();
    },[])
    return (
        <Navbar fixed="top" scrolling expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/images/logo.webp"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        // style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="nav-bar-lg" href="/" >Главная</Nav.Link>
                        <NavDropdown className="nav-bar-lg" title="Продукция" id="navbarScrollingDropdown">
                            {/* eslint-disable-next-line array-callback-return */}
                            {categories.map(function (category, index) {
                                    return <NavDropdown  className={'nav-bar-lg inner-drop'} href={'/products?name+category_ids='+category.category_id} title={category.name}>
                                    </NavDropdown>;
                            })}
                        </NavDropdown>
                       {/* //  Old Category and Subcategory*/}
                        {/*<NavDropdown className="nav-bar-lg" title="Продукция" id="navbarScrollingDropdown">*/}
                        {/*    /!* eslint-disable-next-line array-callback-return *!/*/}
                        {/*    {categories.sort((a,b)=>a.sort_order>b.sort_order?1:-1).map(function (category, index) {*/}
                        {/*        if(category.parent_id===0){*/}
                        {/*            return <NavDropdown  renderMenuOnMount={true} className={'nav-bar-lg inner-drop'} drop={'end'} title={category.name}>*/}
                        {/*                /!* eslint-disable-next-line array-callback-return *!/*/}
                        {/*                {categories.map(function (inner, i) {*/}
                        {/*                    if(category.category_id===inner.parent_id){*/}
                        {/*                        return <NavDropdown.Item href={'/products?category_ids='+inner.category_id} >{inner.name}</NavDropdown.Item>*/}
                        {/*                    }*/}
                        {/*                })}*/}
                        {/*            </NavDropdown>;*/}
                        {/*        }*/}
                        {/*    })}*/}
                        {/*</NavDropdown>*/}
                        <Nav.Link className="nav-bar-lg" href="/warehouses" >Склады</Nav.Link>
                        <Nav.Link className="nav-bar-lg" href="/contacts" >Контакты</Nav.Link>

                    </Nav>
                    <Form className="d-flex search search-nav">
                        <Form.Control
                            type="search"
                            placeholder="Поиск по товарам"
                            className="me-2 custom-input"
                            aria-label="Search"
                        />
                        {/*<Button variant="primary">Заказать звонок</Button>*/}
                    </Form>
                    <Button variant="primary" className="custom-button call-button-lg" onClick={handleShow}>Заказать звонок</Button>
                    <Button variant="primary" className="custom-button call-button" onClick={handleShow}><FontAwesomeIcon icon={faPhone}/></Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header>
                            <Modal.Title>Заполните необходимые данные и наши менеджеры свяжутся с Вами в ближайшее время.</Modal.Title>
                        </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Имя"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="+7"
                                    autoFocus
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрыть
                            </Button>
                            <Button className="custom-button" required variant="primary" type="submit" onClick={handleClose}>
                                Оставить заявку
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button variant="primary" className="button-cart" href="/carts"><img src="./images/cart.webp" height ="20" width="20" alt="cart"/></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NewNavBar;