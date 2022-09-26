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
                        <NavDropdown title="Продукция" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/products" >Сибур</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Нефтехим</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Уфаорг</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Нижнекам</NavDropdown.Item>
                            <NavDropdown.Item href="/products" >Сокар</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about-us" >О нас</Nav.Link>
                        <Nav.Link href="/warehouse" >Склады</Nav.Link>
                        <Nav.Link href="/contacts" >Контакты</Nav.Link>

                    </Nav>
                    <Form className="d-flex search">
                        <Form.Control
                            type="search"
                            placeholder="Поиск по товарам"
                            className="me-2 custom-input"
                            aria-label="Search"
                        />
                        {/*<Button variant="primary">Заказать звонок</Button>*/}
                    </Form>
                    <Button variant="primary" className="custom-button">Заказать звонок</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainMenu;