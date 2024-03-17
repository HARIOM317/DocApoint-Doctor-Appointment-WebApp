import React from 'react';
import "../../stylesheets/homeStylesheets/HeroSection.css";
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
      <section id="hero" className="d-flex align-items-center hero-section">
        <div className="container">
          <div className="introduction">
            <small style={{fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primaryColor)'}}>Welcome to</small>
            <h1>DocApoint</h1>
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              inventore odit quasi maxime ipsum quo molestias officiis autem
              debitis! Qui ab sit et commodi repudiandae unde possimus, ipsam
              fugit neque.
            </small>
            <h3 className="doc-apoint-offers">
              DocApoint is{" "}
              <TypeAnimation
                className="typing"
                sequence={[
                  "a Doctor Appointment Platform",
                  2000,
                  "Your Most Trusted Health Partner",
                  2000,
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            </h3>
          </div>
          <div className="d-flex justify-content-start gap-2">
            <Link to={"/doctors"} className="btn-get-started scrollto">
              Get Started
            </Link>
            <Link
              to={"/track-appointment"}
              className="btn-get-started scrollto"
            >
              Track Appointment
            </Link>
          </div>
        </div>
      </section>
    );
}
export default HeroSection;