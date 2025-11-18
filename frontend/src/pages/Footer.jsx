import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container className="p-4">
        {/* Simple text with a copyright symbol */}
        <div className="text-center p-3">
          &copy; {new Date().getFullYear()} My React App. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;