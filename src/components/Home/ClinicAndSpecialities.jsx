import React from "react";
import img1 from "../../images/specialities/illness.png";
import img2 from "../../images/specialities/ent.png";
import img3 from "../../images/specialities/bone.png";
import img4 from "../../images/specialities/heart.png";
import img5 from "../../images/specialities/tooth.png";
import img6 from "../../images/specialities/surgery.png";
import { FaCheckDouble } from "react-icons/fa";
import "../../stylesheets/homeStylesheets/ClinicAndSpecialties.css";

const ClinicAndSpecialities = () => {
  return (
    <section className="container section-specialities position-relative">
      <div className="container-fluid">
        <div className="mb-5 section-title text-center">
          <h2>Clinic and Specialties</h2>
          <p style={{ color: "var(--textLight)" }}>
            Here is Specialties of our clinics, you can choose the one
          </p>
        </div>

        <div className="row">
          <div className="speicality-item text-center col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="speicality-img">
              <img src={img1} className="img-fluid" alt="" />
              <span>
                <i>
                  <FaCheckDouble />
                </i>
              </span>
            </div>
            <p>Common Illnesses</p>
          </div>
          <div className="speicality-item text-center col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="speicality-img">
              <img src={img2} className="img-fluid" alt="" />
              <span>
                <i>
                  <FaCheckDouble />
                </i>
              </span>
            </div>
            <p>ENT</p>
          </div>
          <div className="speicality-item text-center col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="speicality-img">
              <img src={img3} className="img-fluid" alt="" />
              <span>
                <i>
                  <FaCheckDouble />
                </i>
              </span>
            </div>
            <p>Orthopedic</p>
          </div>
          <div className="speicality-item text-center col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="speicality-img">
              <img src={img4} className="img-fluid" alt="" />
              <span>
                <i>
                  <FaCheckDouble />
                </i>
              </span>
            </div>
            <p>Cardiologist</p>
          </div>
          <div className="speicality-item text-center col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="speicality-img">
              <img src={img5} className="img-fluid" alt="" />
              <span>
                <i>
                  <FaCheckDouble />
                </i>
              </span>
            </div>
            <p>Dentist</p>
          </div>
          <div className="speicality-item text-center col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="speicality-img">
              <img src={img6} className="img-fluid" alt="" />
              <span>
                <i>
                  <FaCheckDouble />
                </i>
              </span>
            </div>
            <p>Surgery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicAndSpecialities;
