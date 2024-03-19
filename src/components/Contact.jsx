import React, { useEffect } from "react";
import Footer from "./Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from "./Shared/Header/Header";
import "../stylesheets/Contact.css";
import SubHeader from "./Shared/SubHeader";
import { useContactMutation } from "../redux/api/contactApi";
import { message } from "antd";
import Lottie from "lottie-react";
import ContactSupport from "../animations/contact_us.json";

const Contact = () => {
  const [contact, { isLoading, isError, error, isSuccess }] =
    useContactMutation();
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = (data) => {
    contact(data);
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Successfully Message Send !");
    }
    if (isError && error) {
      message.error(error?.data?.message);
    }
  }, [isSuccess, isError, error]);
  return (
    <>
      <Header />
      <SubHeader
        title="Contact us"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
      />

      <section id="contact" className="contact">
        <div
          className="container"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side Part */}
                <div className="col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">Contact Us</h1>

                  <figure>
                    <Lottie
                      loop={true}
                      animationData={ContactSupport}
                      className="lottie-animation"
                    />
                  </figure>
                </div>

                {/* Right Side Part */}
                <div className="col-12 col-lg-7">
                  <div className="mb-5 p-2 rounded">
                    <form
                      className="row form-row"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* first row */}
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input
                            required
                            {...register("firstName")}
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>

                        <div className="col-12 col-lg-6 contact-input-field">
                          <input
                            required
                            {...register("lastName")}
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      {/* second row */}
                      <div className="row">
                        <div className="col-12 contact-input-field">
                          <input
                            required
                            {...register("email")}
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      {/* third row */}
                      <div className="row">
                        <div className="col-12 contact-input-field">
                          <input
                            required
                            {...register("subject")}
                            className="form-control"
                            placeholder="Enter your subject"
                          />
                        </div>
                      </div>

                      {/* forth row */}
                      <div className="row">
                        <div className="col-12 contact-input-field">
                          <textarea
                            required
                            {...register("text")}
                            className="form-control mb-3"
                            cols="30"
                            rows="10"
                            placeholder="enter your message"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          disabled={isLoading}
                          type="submit"
                          className="appointment-btn"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
