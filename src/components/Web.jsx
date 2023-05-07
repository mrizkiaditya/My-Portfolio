import React from "react";
import { Card } from "react-bootstrap";
import ptabs from "../assets/web/ptabs.png";
import jagocoding from "../assets/web/jagocoding.png";
import ingriz from "../assets/web/ingriz.png";
import kaldi from "../assets/web/kaldi.png";
import portfoliotailwind from "../assets/web/portfolio-tailwind.png";
import movie from "../assets/web/rizki-movie.png"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Web = () => {

  useEffect(()=>{
    AOS.init({
      once : true,
      duration: 500,
    });
  }, [])

  return (
    <div>
      <div className="web row row-cols-1 row-cols-lg-2">
        <div data-aos="fade-right" className="web_card col">
          <Card className="card">
            <Card.Img variant="top" src={ptabs} />
            <div className="cardbody">
              <h4 className="cardtitle">PT. Anugerah Bumi Samudra</h4>
              <p className="cardsubtitle">
                A Website project for PT. Anugerah Bumi Samudra. This website
                created with HTML, CSS, Bootstrap and laravel
              </p>
              <a href="https://ptabspackaging.com/">
                <button className="cardbtn">See Live</button>
              </a>
            </div>
          </Card>
        </div>
        <div data-aos="fade-left" className="web_card col">
          <Card className="card">
            <Card.Img variant="top" src={portfoliotailwind} />
            <div className="cardbody">
              <h4 className="cardtitle">Portfolio TailwindCSS</h4>
              <p className="cardsubtitle">
                A portfolio website. This website Created with
                HTML and TailwindCSS
              </p>
              <a href="https://mrizkiaditya.github.io/Portfolio-Tailwindcss/">
                <button className="cardbtn">See Live</button>
              </a>
            </div>
          </Card>
        </div>
        <div data-aos="fade-right" className="web_card col">
          <Card className="card">
            <Card.Img variant="top" src={movie} />
            <div className="cardbody">
              <h4 className="cardtitle">Web Movie</h4>
              <p className="cardsubtitle">
                A Website where you can see movie name and its rating. This website
                created with HTML, CSS, React JS and The Movie Database API
              </p>
              <a href="https://rizki-movie.netlify.app/">
                <button className="cardbtn">See Live</button>
              </a>
            </div>
          </Card>
        </div>
        <div data-aos="fade-left" className="web_card col">
          <Card className="card">
            <Card.Img variant="top" src={jagocoding} />
            <div className="cardbody">
              <h4 className="cardtitle">Jago Coding</h4>
              <p className="cardsubtitle">
                A website where you can learn about coding and take a quiz in that. This website Created with
                HTML, CSS, PHP and MySQL
              </p>
              <button className="cardbtn">Not Active yet</button>
            </div>
          </Card>
        </div>
        <div data-aos="fade-right" className="web_card col">
          <Card className="card">
            <Card.Img variant="top" src={ingriz} />
            <div className="cardbody">
              <h4 className="cardtitle">Inggrizz</h4>
              <p className="cardsubtitle">
                A website where you can read something about English. This
                website Created with HTML, CSS, PHP and MySQL
              </p>
              <button className="cardbtn">Not Active yet</button>
            </div>
          </Card>
        </div>
        <div data-aos="fade-left" className="web_card col">
          <Card className="card">
            <Card.Img variant="top" src={kaldi} />
            <div className="cardbody">
              <h4 className="cardtitle">Kaldi.id</h4>
              <p className="cardsubtitle">
                A website project for a food & beverage cafe called Kaldi.Id. This website created with HTML, CSS, Bootstrap and laravel
              </p>
              <button className="cardbtn">Not Active yet</button>
            </div>
          </Card>
        </div>
      </div>
      <div className="web_seemore d-flex justify-content-center">
        <a href="https://github.com/mrizkiaditya">
          <button>See More on Github</button>
        </a>
      </div>
    </div>
  );
};

export default Web;
