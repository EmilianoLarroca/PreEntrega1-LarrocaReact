import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget'
import logo from './../../logo.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Información</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Terror</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Psicologia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Acción
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Ver más
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <a href="">
          <CartWidget />
          </a>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="¿Que desea buscar?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default NavBar;