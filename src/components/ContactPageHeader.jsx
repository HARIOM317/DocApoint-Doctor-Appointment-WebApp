import React from "react";
import "../stylesheets/Contact.css";

const ContactPageHeader = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div class="row">
            {/* <!-- Contact Info item --> */}
            <div class="contact-info-item pad-15">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <h4>Helpline Number</h4>
              <p>+91 0000000000</p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div class="contact-info-item pad-15">
              <div class="icon">
                <i class="fa fa-map"></i>
              </div>
              <h4>Address</h4>
              <p>City, Pin Code, State, Country</p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div class="contact-info-item pad-15">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>xyz@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageHeader;
