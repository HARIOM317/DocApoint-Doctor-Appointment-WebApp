import React from "react";
import SubHeader from "./Shared/SubHeader";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import ServicesHeader from "./services/ServicesHeader";
import ClinicAndSpecialities from "./Home/ClinicAndSpecialities";
import "../stylesheets/serviceStylesheets/Service.css";

import img1 from "../images/services/icu.jpg";
import img2 from "../images/services/chamber.jpg";
import img3 from "../images/services/test_room.jpg";
import img4 from "../images/services/patient_ward.jpg";
import img5 from "../images/services/laboratory.jpg";

const ServiceAPI = [
  {
    id: 1,
    img: img1,
    name: "ICU",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate enim aut? Dolor officiis et quos voluptas, totam ipsum quisquam omnis ut autem reprehenderit facere, at, quia natus numquam dolore!",
  },

  {
    id: 2,
    img: img2,
    name: "Chamber",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate enim aut? Dolor officiis et quos voluptas, totam ipsum quisquam omnis ut autem reprehenderit facere, at, quia natus numquam dolore!",
  },

  {
    id: 3,
    img: img3,
    name: "Test Room",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate enim aut? Dolor officiis et quos voluptas, totam ipsum quisquam omnis ut autem reprehenderit facere, at, quia natus numquam dolore!",
  },

  {
    id: 4,
    img: img4,
    name: "Patient Ward",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate enim aut? Dolor officiis et quos voluptas, totam ipsum quisquam omnis ut autem reprehenderit facere, at, quia natus numquam dolore!",
  },

  {
    id: 5,
    img: img5,
    name: "Laboratory",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate enim aut? Dolor officiis et quos voluptas, totam ipsum quisquam omnis ut autem reprehenderit facere, at, quia natus numquam dolore!",
  },
];

const Service = () => {
  return (
    <>
      <Header />
      <SubHeader
        title="Service"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
      />

      <ServicesHeader />

      <ClinicAndSpecialities />

      <div
        className="container services"
        style={{ marginTop: 100, marginBottom: 50 }}
      >
        <div className="section-title text-center">
          <h2 className="text-uppercase">Our Services</h2>
          <p className="form-text m-0">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="row" style={{ marginTop: 50 }}>
          {ServiceAPI.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
              <div className="card mb-5 service-card">
                <img
                  src={item.img}
                  alt="Service"
                  className="img-fluid"
                  style={{ maxHeight: "17rem", objectFit: "cover" }}
                />
                <div className="p-2">
                  <div className="mt-2 mb-4">
                    <span>{item.name}</span>
                  </div>
                  <p className="mb-4">{item.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Service;
