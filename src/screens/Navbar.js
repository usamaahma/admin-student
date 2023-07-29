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
            <Link to="/" style={{ textDecoration: "none" }}>
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
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#ffb201" }}
                >
                  <p className="eveylink">Dashboard</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link
                  to="/admission"
                  style={{ textDecoration: "none", color: "#ffb201" }}
                >
                  <p className="eveylink">Admission</p>
                </Link>
              </Nav.Link>
              <Nav.Link href="#accomodation">
                <Link
                  to="/accomodation"
                  className="eveylink"
                  style={{ textDecoration: "none", color: "#ffb201" }}
                >
                  <p className="eveylink">Accomodation</p>
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
