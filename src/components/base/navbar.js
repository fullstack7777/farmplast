import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MainMenu() {
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
                        <Nav.Link href="/" >Главная</Nav.Link>
                        <NavDropdown title="Продукция" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/products" >Сибур</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Нефтехим</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Уфаорг</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Нижнекам</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Сокар</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/warehouses" >Склады</Nav.Link>
                        <Nav.Link href="/contacts" >Контакты</Nav.Link>

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
                    <Button variant="primary" className="custom-button">Заказать звонок</Button>
                    <Button variant="primary" className="button-cart" href="/orders"><img src="./images/cart.webp" height ="20" width="20" alt="cart"/></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainMenu;