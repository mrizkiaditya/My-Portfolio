import React from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import mysql from "../assets/mysql.png"
import php from "../assets/php.png"
import react from "../assets/react.png"
import ps from "../assets/ps.png";
import ai from "../assets/ai.png";
import "./style.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(()=>{
    AOS.init({
      once : true,
      duration: 500,
    });
  }, [])

  return (
    <section className="skills d-flex align-items-center justify-content-center" id="skills">
      <div className="container">

        <div className="row">
          <div data-aos="fade-up" className="title text-center mb-4">
            <h2>My Skills</h2>
            <p>Technical Skills</p>
          </div>
        </div>

        <div data-aos="fade-up" className="row skill_group d-flex justify-content-center">

            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="javascript" />
            <img src={mysql} alt="mysql" />
            <img src={php} alt="php" />
            <img src={react} alt="react js" />
            <img src={ps} alt="photoshop" />
            <img src={ai} alt="illustrator" />

        </div>

      </div>
    </section>
  );
};

export default Skills;
