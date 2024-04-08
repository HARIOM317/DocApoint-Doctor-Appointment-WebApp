import React from "react";
import "../../stylesheets/homeStylesheets/Service.css";
import img1 from "../../images/home/service1.jpg";
import img2 from "../../images/home/service2.jpg";
import img3 from "../../images/home/service3.jpg";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import doctorAnimation from "../../animations/doctor.json";

const Service = () => {
  return (
    <section
      className="container"
      style={{ marginTop: 100, marginBottom: 100 }}
    >
      <div className="mb-5 section-title text-center">
        <h2>Services</h2>
        <p style={{color: 'var(--textLight)'}}>Here is the top services provided by DocApoint</p>
      </div>
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="row align-items-start h-100">
          <div className=" col-lg-5  col-sm-12">
            <div className="service-img">
              <div className="img-wrapper">
                <img src={img1} alt="" className="img-fluid" />
              </div>
              <div className="img-wrapper mt-4">
                <img src={img2} alt="" className="img-fluid" />
              </div>
              <div className="img-wrapper mt-4">
                <img src={img3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-sm-12">
            <div className="m-0 p-0 d-flex flex-column align-items-center justify-content-center">
              <Lottie
                className="doctor"
                loop={true}
                animationData={doctorAnimation}
              />
            </div>

            <div className="service-content ps-4 mt-5">
              <h2 className="service-title">
                Personal care <br />
                healthy living
              </h2>
              <p
                className="mt-4 mb-4"
                style={{ color: "var(--textLight)", textAlign: "justify" }}
              >
                Our comprehensive services cater to all your healthcare needs,
                ensuring holistic wellness and peace of mind. From booking
                appointments and consulting with doctors to managing health
                records and receiving digital prescriptions, our platform offers
                convenience at every step. Our personalized care extends to
                promoting healthy living, with preventive screenings, lifestyle
                guidance, and expert advice tailored to your needs. With a focus
                on your well-being, we aim to empower you to live a healthier
                life. Our dedicated customer care team is available around the
                clock to provide prompt assistance and ensure your healthcare
                journey is seamless and stress-free.
              </p>
              <Link to={"/service"} className="btn-get-started scrollto">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
