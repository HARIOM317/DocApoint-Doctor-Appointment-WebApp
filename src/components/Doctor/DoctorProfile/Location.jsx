import React from "react";
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
  );
};

export default Location;
