import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./style.css";
import { UilPalette } from "@iconscout/react-unicons";
import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAward } from "@iconscout/react-unicons";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
    AOS.init({
      once : true,
      duration: 500,
    });
  }, [])

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <div data-aos="fade-up" className="title text-center mb-4">
            <h2>About Me</h2>
            <p>Introduction</p>
          </div>
          <Col sm={6} className="text d-flex align-items-center">
            <div data-aos="fade-up">
              <p>Hello! My name is Muhammad Rizki Aditya</p>
              <p>
                Fresh graduate from Gunadarma University majoring in Informatics
                Engineering who has high enthusiasm and motivation in the field
                of Information Technology.
              </p>
              <p>
                Skilled in operating Figma, Adobe Illustrator, Adobe Photoshop
                and have a good understanding in HTML, CSS, PHP and MySQL.
              </p>
              <p>
                I have 1 year experience as Freelance Graphic Designer and have
                some projects in web development.
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <div data-aos="fade-up">
              <div className="text-center row row-cols-2 row-cols-lg-2 d-flex justify-content-center">
                <Card className="card_group mb-3 mx-2 shadow" style={{ width: "15rem" }}>
                  <Card.Body>
                    <UilAward size={'60px'} />
                    <Card.Title className="mt-2">Grade Point Average</Card.Title>
                    <Card.Text>3.57/4.00</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card_group mb-3 mx-2 shadow" style={{ width: "15rem" }}>
                  <Card.Body>
                    <UilBracketsCurly size={'60px'} />
                    <Card.Title className="mt-2">Experience in Web Development</Card.Title>
                    <Card.Text>1+ Years</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card_group mb-3 mx-2 shadow" style={{ width: "15rem" }}>
                  <Card.Body>
                    <UilPalette size={'60px'} />
                    <Card.Title className="mt-2">Experience in Graphic Design</Card.Title>
                    <Card.Text>1+ Years</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
