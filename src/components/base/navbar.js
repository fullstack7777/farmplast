import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MainMenu() {
    return (
        <Navbar fixed="top" scrolling expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src="/images/logo.png"
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
                            <NavDropdown.Item href="#action3" className="text-decoration-underline-white">Сибур</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="text-decoration-underline-white">Нефтехим</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="text-decoration-underline-white">Уфаорг</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="text-decoration-underline-white">Нижнекам</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="text-decoration-underline-white">Сокар</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1" className="text-decoration-underline-white">О нас</Nav.Link>
                        <Nav.Link href="#action2" className="text-decoration-underline-white">Склады</Nav.Link>
                        <Nav.Link href="#action3" className="text-decoration-underline-white">Контакты</Nav.Link>

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