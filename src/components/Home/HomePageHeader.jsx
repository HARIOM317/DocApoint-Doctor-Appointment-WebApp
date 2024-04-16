import React from "react";
import { TypeAnimation } from "react-type-animation";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../../stylesheets/homeStylesheets/HomePageHeader.css";
import doctorImg from "../../images/img/doctor.jpeg";
import useAuthCheck from "../../redux/hooks/useAuthCheck";

const HomePageHeader = () => {
  const { role } = useAuthCheck();

  return (
    <>
      <section className="homepage margin-top-max">
        <section className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side order-lg-first order-last">
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
                DocApoint is a user-friendly doctor appointment website that
                simplifies appointment scheduling and management for patients
                and doctors. It offers convenient features such as online
                booking, schedule updates, digital prescriptions, and patient
                reviews, improving the healthcare experience for all.
              </p>

              <div>
                {role === "patient" ? (
                  <NavLink to={"/doctors"} className="btn-get-started">
                    Book Appointment
                  </NavLink>
                ) : role === "doctor" ? (
                  <NavLink
                    to={"/dashboard/appointments"}
                    className="btn-get-started"
                  >
                    Check Appointments
                  </NavLink>
                ) : (
                  <NavLink to={"/login"} className="btn-get-started">
                    Book Appointment
                  </NavLink>
                )}
                {role === "patient" && (
                  <NavLink
                    to={"/track-appointment"}
                    className="btn-get-started"
                  >
                    Track Appointment
                  </NavLink>
                )}
              </div>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 header-right-side main-header-section-images order-md-first order-sm-first">
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
