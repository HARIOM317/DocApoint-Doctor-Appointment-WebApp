import React from "react";
import "../stylesheets/About.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import ImageHeading from "../images/doc/doctor 5.jpg";
import img from "../images/logo.png";
import SubHeader from "./Shared/SubHeader";
import { useGetAllBlogsQuery } from "../redux/api/blogApi";
import { Empty, message } from "antd";
import { Link } from "react-router-dom";
import { truncate } from "../utils/truncate";
import { useGetDoctorsQuery } from "../redux/api/doctorApi";
import AboutUs from "./about/AboutUs";
import Achievements from "./about/Achievements";
import doctorProfile from "../images/home/doctorProfile.jpg"
import { NavLink } from "react-router-dom";

const About = () => {
  const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
  const {
    data: doctorData,
    isLoading: DoctorIsLoading,
    isError: doctorIsError,
  } = useGetDoctorsQuery({ limit: 4 });

  const blogData = data?.blogs;
  const doctors = doctorData?.doctors;

  let doctorContent = null;
  if (!DoctorIsLoading && doctorIsError)
    doctorContent = <div>Something Went Wrong !</div>;
  if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0)
    doctorContent = (
      <div>
        <Empty />
      </div>
    );
  if (!DoctorIsLoading && !doctorIsError && doctors?.length > 0)
    doctorContent = (
      <>
        <div className="top-specialist">
          <div className="container">
            <div className="row">
              {doctors &&
                doctors.map((item, id) => (
                  <div
                    className="col-12 col-lg-3 col-md-4 col-sm-6 text-center top-specialist-card"
                    key={id}
                  >
                    <img
                      src={item.img == null ? doctorProfile : item.img}
                      alt="Doctor"
                      className="img-fluid"
                    />
                    <h2>{item?.firstName + " " + item?.lastName}</h2>
                    <p>
                      {item?.designation} {item?.specialization}
                    </p>

                    <NavLink
                      to={`/doctors/profile/${item?.id}`}
                      className="card-btn"
                    >
                      {"View Details »"}
                    </NavLink>

                    {/* <button className="card-btn">{"View Details »"}</button> */}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* {doctors &&
          doctors.map((item, id) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={id + item.id}>
              <div className="meet-our-doctor mb-5 mb-lg-0">
                <img
                  src={item.img == null ? doctorProfile : item.img}
                  class="img-fluid w-100"
                  alt=""
                />
                <div className="p-2">
                  <h4
                    className="mt-4 mb-0"
                    style={{ color: "var(--textColor)", textAlign: "center" }}
                  >
                    <a>{item?.firstName + " " + item?.lastName}</a>
                  </h4>
                  <p>{item?.designation}</p>
                </div>
              </div>
            </div>
          ))} */}
      </>
    );

  return (
    <>
      <Header />
      <SubHeader
        title="about us"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
      />

      <AboutUs />
      <Achievements />


      <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="mb-4 section-title text-center">
              <h2 className="text-uppercase">Meet Our Specialist</h2>
              <p className="form-text m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                ipsum!
              </p>
            </div>
          </div>
        </div>

        <div className="row">{doctorContent}</div>
      </div>

      
      <Footer />
    </>
  );
};

export default About;
