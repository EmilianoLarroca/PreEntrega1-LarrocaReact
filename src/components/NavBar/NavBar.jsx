import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from './../../logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand as={NavLink} to='/'><img src={logo} width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link href="#action2">Información</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/Terror'>Terror</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/Psicologia'>Psicologia</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/Acción'>Acción</NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/'>Todos los Productos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <a href="">
          <CartWidget />
          <Nav.Link className="menu-link" to="/carrito"></Nav.Link>
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