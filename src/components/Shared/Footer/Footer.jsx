import React from "react";
import "../../../stylesheets/Footer.css";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  const instructions = () => {};
  const ideaTemplate = () => {};

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* First Column */}
                <div className="col-6 col-lg-3">
                  <h2>Patients</h2>
                  <ul>
                    <li>
                      <NavLink to="/doctors">
                        <FaAngleDoubleRight className="icon" /> Search for
                        Doctors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <FaAngleDoubleRight className="icon" /> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <FaAngleDoubleRight className="icon" /> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/doctors">
                        <FaAngleDoubleRight className="icon" /> Book Appointment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard">
                        <FaAngleDoubleRight className="icon" /> Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <a href="#faq">
                        <FaAngleDoubleRight className="icon" /> FAQs
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Second Column */}
                <div className="col-6 col-lg-3">
                  <h2>Doctors</h2>
                  <ul>
                    <li>
                      <NavLink to={"/dashboard"}>
                        <FaAngleDoubleRight className="icon" /> Appointments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <FaAngleDoubleRight className="icon" /> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/login"}>
                        <FaAngleDoubleRight className="icon" /> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard">
                        <FaAngleDoubleRight className="icon" /> Dashboard
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Third Column */}
                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <NavLink to="/" className="contact-link">
                        <span className="contact-icon">
                          <i class="fa-solid fa-phone"></i>
                        </span>{" "}
                        +91 12345 54321
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="mailto:docapoint@gmail.com"
                        className="contact-link"
                      >
                        <span className="contact-icon">
                          <i class="fa-solid fa-envelope"></i>
                        </span>{" "}
                        docapoint@gmail.com
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" target="_blank" className="contact-link">
                        <span className="contact-icon">
                          <i class="fa-solid fa-location-dot"></i>
                        </span>{" "}
                        Address, City, Pin
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Forth Column */}
                <div className="col-6 col-lg-3">
                  <h2>Social</h2>
                  <div className="social-media-buttons">
                    <NavLink
                      to="/"
                      style={{ background: "#0a63bc" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </NavLink>
                    <NavLink
                      to="/"
                      style={{ background: "#3b5998" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </NavLink>
                    <NavLink
                      to="/"
                      style={{ background: "#db1c8a" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </NavLink>
                    <NavLink
                      to="/"
                      style={{ background: "#03a9f4" }}
                      className="link"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </NavLink>
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-4 flexRowSpaceBetween">
                <p className="copyright">© Copyright DocApoint-2024. All rights reserved.
                </p>

                <div className="policy">
                  <NavLink to="/" className="termsLinks">Privacy Policy</NavLink>
                  <NavLink to="/" className="termsLinks">Term of Service</NavLink>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
