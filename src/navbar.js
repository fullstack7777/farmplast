import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">FarmPlast</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Продукция" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Сибур</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Нефтехим</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Уфаорг</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Нижнекам</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Сокар</NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            {/*<NavDropdown.Item href="#action5">*/}
                            {/*    Something else here*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                        <Nav.Link href="#action1">О нас</Nav.Link>
                        <Nav.Link href="#action2">Склады</Nav.Link>
                        <Nav.Link href="#action2">Контакты</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Поиск"
                            className="me-2"
                            aria-label="Search"
                        />
                        {/*<Button variant="primary">Заказать звонок</Button>*/}
                    </Form>
                    <Button variant="primary">Заказать звонок</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;