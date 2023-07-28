import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div>
            {" "}
            <Link to="/">
              <img
                className="logook"
                alt="abc"
                src="../images/studentlogo.png"
              />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <div className="allgap">
              <Nav.Link href="#home">
                <Link to="/">
                  <p className="eveylink">Dashboard</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/admission" className="eveylink">
                  <p>Admission</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#accomodation" className="eveylink">
                <Link to="/accomodation" className="eveylink">
                  <p>Accomodation</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#loan" className="eveylink">
                Loan Expert
              </Nav.Link>
              <Nav.Link href="#visa" className="eveylink">
                Visa Expert
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
