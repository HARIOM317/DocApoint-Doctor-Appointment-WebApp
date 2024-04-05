import React from "react";
<<<<<<< HEAD
import img from "../../../images/chair.png";
const Location = () => {
  return (
    <div className="location-list ">
      {Array(2)
        .fill(null)
        .map((_item, index) => (
          <div className="card shadow p-3 border-0 mb-3">
            <div className="row">
              <div className="col-md-6">
                <div className=" clinic-content">
                  <h4 className="clinic-name">
                    <a href="#">Smile Cute Dental Care Center</a>
                  </h4>
                  <p className="doc-speciality">
                    MDS - Periodontology and Oral Implantology, BDS
                  </p>
                  <div className="clinic-details mb-0">
                    <h5 className="clinic-direction">
                      {" "}
                      <i className="fas fa-map-marker-alt"></i> 2286 Sundown
                      Lane, Austin, Texas 78749, USA <br />
                      <a>Get Directions</a>
                    </h5>
                    <ul>
                      {Array(4)
                        .fill(null)
                        .map((_item, index) => (
                          <li key={index + 2}>
                            <a>
                              <img src={img} alt="Feature Image" />
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="clinic-timing">
                  <div>
                    <p className="timings-days">
                      <span> Mon - Sat </span>
                    </p>
                    <p className="timings-times">
                      <span>10:00 AM - 2:00 PM</span>
                      <span>4:00 PM - 9:00 PM</span>
                    </p>
                  </div>
                  <div>
                    <p className="timings-days">
                      <span>Sun</span>
                    </p>
                    <p className="timings-times">
                      <span>10:00 AM - 2:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="consult-price">$250</div>
              </div>
            </div>
          </div>
        ))}
    </div>
=======
import "../../../stylesheets/doctorStylesheets/Location.css";
const Location = () => {
  return (
    <section className="mt-3">
      <div className="row">
        <div className="col-lg-6 co-md-12">
          <div className="location-card">
            <div className="icon">
              <i class="fa-solid fa-map-location-dot"></i>
            </div>

            <h4 className="clinic-name">Sagar Multi-Care Hospital</h4>

            <div className="specialization">
              MDS - Periodontology and Oral Implantology, BDS
            </div>

            <div className="clinic-address">
              <i className="fas fa-map-marker-alt"></i>Gandhi Nagar, Bhopal, 123321, MP
              (INDIA)
            </div>
          </div>
        </div>

        <div className="col-lg-6 co-md-12">
          <div className="location-card">
            <div className="icon">
              <i class="fa-solid fa-map-location-dot"></i>
            </div>

            <h4 className="clinic-name">HSR Clinic</h4>

            <div className="specialization">
              MDS - Periodontology and Oral Implantology, BDS
            </div>

            <div className="clinic-address">
              <i className="fas fa-map-marker-alt"></i>MP Nagar, Bhopal, 102030, MP
              (INDIA)
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
  );
};

export default Location;
