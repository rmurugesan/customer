import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Header() {
  const token = localStorage.getItem('token') ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(token);
  const navigate = useNavigate();
  
  const handleLogout  = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/login'); 
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          {/* Brand/Logo on the left */}
          <Navbar.Brand href="/">Customer Segmentation - App</Navbar.Brand>
          
          {/* Hamburger menu button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links, aligned to the right (ms-auto) */}
            <Nav className="ms-auto"> 
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              {isLoggedIn ? (
                <>
                <Nav.Link href="/admin">Admin</Nav.Link>  
                <Nav.Link href="/manager" >Manager</Nav.Link>               

                
                <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link>                
                </>
              ) : (
              <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;