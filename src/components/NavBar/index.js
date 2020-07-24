import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {

  return (
    <div style={{maxWidth: "800px", margin: "auto", color: "#0979a4"}}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">kvaltis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Products</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;