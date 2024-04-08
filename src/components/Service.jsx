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
      "Our ICU service offers advanced care and monitoring for critically ill patients, ensuring timely and effective interventions. With state-of-the-art facilities and a skilled team of medical professionals, we provide comprehensive ICU care for optimal patient outcomes.",
  },

  {
    id: 2,
    img: img2,
    name: "Chamber",
    about:
      "Our chambers offer a professional and confidential space for consultations and examinations. Designed for comfort and privacy, our chambers provide an ideal environment for personalized care, ensuring a positive experience for both patients and healthcare providers.",
  },

  {
    id: 3,
    img: img3,
    name: "Test Room",
    about:
      "Our Test Room provides a dedicated space for diagnostic procedures, ensuring a comfortable and efficient experience for patients. Equipped with state-of-the-art technology and staffed by experienced professionals, our Test Room facilitates accurate and timely diagnostic testing.",
  },

  {
    id: 4,
    img: img4,
    name: "Patient Ward",
    about:
      "Our Patient Ward offers a caring and supportive environment for patients, ensuring their comfort and well-being during their stay. With dedicated healthcare staff and modern amenities, our Patient Ward provides high-quality care and promotes a positive healing experience.",
  },

  {
    id: 5,
    img: img5,
    name: "Laboratory",
    about:
      "Our Laboratory is equipped with advanced technology and staffed by skilled professionals, ensuring accurate and timely test results. We maintain strict quality control measures to deliver reliable diagnostic services, supporting our commitment to providing high-quality healthcare to our patients.",
  },
];

const Service = () => {
  return (
    <>
      <Header />
      <SubHeader
        title="Service"
        subtitle="Explore our service ad professional environment"
      />

      <ServicesHeader />

      <ClinicAndSpecialities />

      <div
        className="container services"
        style={{ marginTop: 100, marginBottom: 50 }}
      >
        <div className="section-title text-center">
          <h2 className="text-uppercase">Our Services</h2>
          <p style={{ color: "var(--textLight)" }}>
            These are the services we provided in our Clinic/Hospital.
          </p>
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
