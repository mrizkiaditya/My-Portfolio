import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Web from './Web'
import Design from './Design'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

  useEffect(()=>{
    AOS.init({
      once : true,
      duration: 500,
    });
  }, [])

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
      <BrowserRouter>
        <div data-aos="fade-up" className="row title text-center">
          <h2>My Portfolio</h2>
          <div>
            <Link className="link" to="/">Web Development</Link>
            <span> | </span>
            <Link className="link" to="/design">Design</Link>
          </div>
        </div>
        <div className="d-flex justify-content-center">
            <Routes>
                <Route path="/" exact element={<Web />} />
                <Route path="/design" exact element={<Design />} />
            </Routes>
        </div>
        </BrowserRouter>
      </div>
    </section>
  );
};

export default Portfolio;
