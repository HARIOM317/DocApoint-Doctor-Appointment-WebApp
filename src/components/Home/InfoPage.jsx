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
              <h3>Why Choose Us?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center">
                <Link href="/" className="more-btn">
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deleniti ut adipisci eaque sed dolorem eligendi nostrum,
                      sunt odit cumque labore doloremque quisquam asperiores
                      tempore. Quisquam laboriosam animi qui quia temporibus.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHeadset className="icon" />
                    <h4>Customer Care</h4>
                    <h6 className="text-secondary">+88 01751 040425</h6>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur deleniti ut quam explicabo voluptates dolor,
                      quisquam nemo. Quis pariatur laboriosam placeat amet quasi
                      beatae sed magni veritatis, aut, temporibus cum!
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
