import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import photo from "../assets/myphoto.jpg";
import "./style.css";
import { UilFileDownload } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import resume from "../assets/Muhammad-Rizki-Aditya-resume.pdf"

const Home = () => {
  return (
    <section id="home">
      <Container>
        <div className="home d-flex align-items-center">
        <Row>
          <Col sm={5} className="photo d-flex justify-content-center">
            <img src={photo} alt="Muhammad Rizki Aditya's photo" />
          </Col>
          <Col
            sm={6}
            className="d-flex align-items-center justify-content-center">
            <div className="content">
              <h1>Muhammad Rizki Aditya</h1>
              <h3>Bachelor of Informatics Engineering</h3>
              <div className="download_text">
              <a href={resume}>
              <Button className="download mt-2">
                Download CV <UilFileDownload />
              </Button>
              </a> 
              </div>
            </div>
          </Col>
          <Col sm={1} className="socmed_group">
          <a href="https://www.linkedin.com/in/rizkidty/">
            <Button className="socmed">
             <UilLinkedin />
            </Button>
            </a>
            <a href="https://github.com/mrizkiaditya">
            <Button className="socmed">
              <UilGithub />
            </Button>
            </a>
            <a href="https://www.instagram.com/rizkidty/">
            <Button className="socmed">
              <UilInstagram />
            </Button>
            </a>
            <a href="https://wa.me/6281380564465">
            <Button className="socmed">
              <UilWhatsapp />
            </Button>
            </a>
            <a href="mailto:muhammadrizkiaditya1@gmail.com">
            <Button className="socmed">
              <UilEnvelope />
            </Button>
            </a>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default Home;
