import React, {useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";

const NavigationBar = () => {
  const [navbar,setNavbar] = useState(false);

  const changeNavbar = () => {
    if(window.scrollY>= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);

  return (
    <Navbar className={navbar ? 'navbar active fixed-top text-light' : 'navbar fixed-top text-light'} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="title" href="#home">
          Rizki Aditya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text_link"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_link" href="#portfolio">
                Portfolio
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
