import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbar1() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <img alt="abc" src="../images/studentlogo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="eveylink">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#link" className="eveylink">
              Admission
            </Nav.Link>
            <Nav.Link href="#accomodation" className="eveylink">
              Accomodation
            </Nav.Link>
            <Nav.Link href="#loan" className="eveylink">
              Loan Expert
            </Nav.Link>
            <Nav.Link href="#visa" className="eveylink">
              Visa Expert
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
