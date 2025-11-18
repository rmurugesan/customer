import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          {/* Brand/Logo on the left */}
          <Navbar.Brand href="/">🚀 My React App</Navbar.Brand>
          
          {/* Hamburger menu button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links, aligned to the right (ms-auto) */}
            <Nav className="ms-auto"> 
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;