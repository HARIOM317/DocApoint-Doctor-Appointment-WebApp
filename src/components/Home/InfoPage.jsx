import React from "react";
import "../../stylesheets/homeStylesheets/InfoPage.css";
import { FaClock, FaHeadset, FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (
    <section className="why-us mt-5 mt-md-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why DocApoint?</h3>
              <p>
                Choose DocApoint for effortless healthcare management. Our
                platform offers seamless appointment booking, real-time schedule
                updates, and secure digital prescriptions. With user-friendly
                features for patients and doctors, docApoint streamlines the
                healthcare process, ensuring a smooth experience for all.
              </p>
              <div className="text-center">
                <Link to="/about" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHouseUser className="icon" />
                    <h4>Appointment</h4>
                    <small className="text-secondary">24 Hours Service</small>
                    <p>
                      Discover the ease of our 24/7 healthcare services. With
                      us, you can book appointments, consult with doctors, and
                      manage health records at any time, all designed for your
                      convenience.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHeadset className="icon" />
                    <h4>Customer Care</h4>
                    <h6 className="text-secondary">+88 01751 040425</h6>
                    <p>
                      Our dedicated customer care team is here to support you.
                      With prompt assistance and personalized service, we ensure
                      that your healthcare needs are met with care and
                      efficiency, every step of the way.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaClock className="icon" />
                    <h4>Working Hours</h4>
                    <small className="text-secondary">Timing schedule</small>

                    <div>
                      <div className="box">
                        <div className="day-range">Mon - Wed</div>
                        <div className="available-time">
                          08:00 AM - 05:00 PM
                        </div>
                      </div>

                      <div className="box">
                        <div className="day-range">Thu - Fri</div>
                        <div className="available-time">
                          09:00 AM - 05:00 PM
                        </div>
                      </div>

                      <div className="box">
                        <div className="day-range">Sat - Sun</div>
                        <div className="available-time">
                          10:00 AM - 05:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
