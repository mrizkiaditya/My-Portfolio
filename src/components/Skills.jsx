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
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 skill_group d-flex justify-content-center">
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={html} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={css} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={js} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={mysql} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={php} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={react} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={ps} alt="" />
          </div>
          <div data-aos="zoom-in" className=" skill_logo">
            <img src={ai} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
