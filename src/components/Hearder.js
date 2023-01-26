import Link from 'next/link';
import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Hearder(props) {
    return (
        <div id='hearder'>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">ACCOUNT 24/7</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/acc/lmht">LMHT</Nav.Link>
                                <Nav.Link href="/acc/tocchien">Tốc Chiến</Nav.Link>
                                <Nav.Link href="/acc/lienquan">Liên Quân</Nav.Link>
                                <Nav.Link href="/acc/fifa">FIFA</Nav.Link>
                                <Nav.Link href="/acc/pubg/mobile">PUBG Mobile</Nav.Link>
                                <Nav.Link href="/acc/pubg/pc">PUBG PC</Nav.Link>
                                <Nav.Link href="/usermanual">Hướng dẫn</Nav.Link>
                            </Nav>
                            <Link href={"/login"}>
                                <Button variant="outline-success" className='me-2'>Đăng nhập</Button>
                            </Link>
                            <Link href={"/register"}>
                                <Button variant="outline-success">Đăng ký</Button>
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

        </div>
    );
}

export default Hearder;