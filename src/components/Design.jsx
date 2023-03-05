import React from "react";
import { Card } from "react-bootstrap";
import kaldi1 from "../assets/design/kaldi1.png";
import kaldi2 from "../assets/design/kaldi2.png";
import kaldi3 from "../assets/design/kaldi3.jpg";
import kaldi4 from "../assets/design/kaldi4.jpg";
import mbappe from "../assets/design/mbappe.jpg";
import mitoma from "../assets/design/mitoma.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Design = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  return (
    <div>
      <div className=" design row row-cols-1 row-cols-lg-2">
        <div data-aos="fade-up" className="design_card">
          <div className="col mb-3">
            <Card>
              <Card.Img className="image" variant="top" src={kaldi1} />
            </Card>
          </div>
        </div>
        <div data-aos="fade-up" className="design_card">
          <div className="col mb-3">
            <Card>
              <Card.Img className="image" variant="top" src={kaldi2} />
            </Card>
          </div>
        </div>
        <div data-aos="fade-up" className="design_card">
          <div className="col mb-3">
            <Card>
              <Card.Img className="image" variant="top" src={mbappe} />
            </Card>
          </div>
        </div>
        <div data-aos="fade-up" className="design_card">
          <div className="col mb-3">
            <Card>
              <Card.Img className="image" variant="top" src={mitoma} />
            </Card>
          </div>
        </div>
        <div data-aos="fade-up" className="design_card">
          <div className="col mb-3">
            <Card>
              <Card.Img className="image" variant="top" src={kaldi3} />
            </Card>
          </div>
        </div>
        <div data-aos="fade-up" className="design_card">
          <div className="col mb-3">
            <Card>
              <Card.Img className="image" variant="top" src={kaldi4} />
            </Card>
          </div>
        </div>
      </div>
      <div className="design_seemore d-flex justify-content-center">
        <a href="https://www.behance.net/rizkiaditya13">
          <button>See More on Behance</button>
        </a>
      </div>
    </div>
  );
};

export default Design;
