import React from "react";
import { TypeAnimation } from "react-type-animation";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../../stylesheets/homeStylesheets/HomePageHeader.css";
import doctorImg from "../../images/img/doctor.jpeg";

const HomePageHeader = () => {
  return (
    <>
      <section className="homepage margin-top-max">
        <section className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h3 className="sih-offers">
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

              <p className="main-header-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                voluptate rerum, adipisci ullam, perferendis quis vitae dolorum
                et voluptatum sit modi, sequi tenetur hic veritatis dolorem
                repudiandae. Adipisci, numquam ut!
              </p>

              <div className="d-flex justify-content-start gap-2">
                <NavLink to={"/doctors"} className="btn-get-started scrollto">
                  Get Started
                </NavLink>
                <NavLink
                  to={"/track-appointment"}
                  className="btn-get-started scrollto"
                >
                  Track Appointment
                </NavLink>
              </div>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-header-section-images order-md-first order-sm-first">
              <div>
                <img src={doctorImg} alt="Doctor" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePageHeader;
