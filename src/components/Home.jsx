import React from "react";
import { Button, Container } from "react-bootstrap";
import photo from "../assets/myphoto.jpg";
import "./style.css";
import { UilFileDownload } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import resume from "../assets/mrizkiaditya-resume.pdf";
import Typed from 'typed.js';

const Home = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Bachelor of Computer</i>', 'Web Developer'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <Container>
        <div className="home d-flex align-items-center">

          <div className="row d-flex justify-content-between">
            <div className="col-md-6 col-lg-5 photo d-flex justify-content-center">
              <img src={photo} alt="Muhammad Rizki Aditya's photo" />
            </div>

            <div className="content col-md-6 col-lg-5 d-flex align-items-center">
              <div>
                <h1>Muhammad Rizki Aditya</h1>
                <h3><span ref={el}></span></h3>
                <div className="download_text">
                  <a href={resume}>
                    <Button className="download mt-2">
                      Download CV <UilFileDownload />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-1 socmed_group">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
