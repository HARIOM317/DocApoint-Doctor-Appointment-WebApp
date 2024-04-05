import React from 'react';
import "../../stylesheets/homeStylesheets/Service.css";
import img1 from "../../images/home/service1.jpg";
import img2 from "../../images/home/service2.jpg";
import img3 from "../../images/home/service3.jpg";
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section
      className="container"
      style={{ marginTop: 100, marginBottom: 100 }}
    >
      <div className="mb-5 section-title text-center">
        <h2>Services</h2>
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="container" style={{marginTop: '6rem'}}>
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="service-img">
              <div className="img-wrapper1">
                <img src={img1} alt="" className="img-fluid img1" />
              </div>
              <div className="img-wrapper2 mt-4">
                <img src={img2} alt="" className="img-fluid img2" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-img mt-4 mt-lg-0">
              <div className="img-wrapper3">
                <img src={img3} alt="" className="img-fluid img3" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-content ps-4 mt-4 mt-lg-0">
              <h2>
                Personal care <br />
                healthy living
              </h2>
              <p className="mt-4 mb-4">
                We provide best leading medicle service Nulla perferendis veniam
                deleniti ipsum officia dolores repellat laudantium obcaecati
                neque.
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