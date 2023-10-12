import React from 'react'
import {Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import pizzaLogo from "../assets/pizzaLogo.png"

const Navbar = () => {
  return (
    <NavbarBS bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <NavbarBS.Brand to="/" as={NavLink}>
          <img src={pizzaLogo} alt='logo' style={{ maxWidth: "70px", maxHeight: "70px" }} />
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Nav>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/menu" as={NavLink}>Menu</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
        </Nav>
      </Container>
    </NavbarBS>
  );
}

export default Navbar