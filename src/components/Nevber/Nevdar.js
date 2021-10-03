import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Nevbar.css'

const Nevdar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="">
                    <Navbar.Brand href="#home">BALLER</Navbar.Brand>
                    <Nav className=" fw-bold fs-4">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#sports">Sports</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#about">Contact us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Nevdar;