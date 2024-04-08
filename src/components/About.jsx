import React from "react";
import "../stylesheets/About.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import SubHeader from "./Shared/SubHeader";
import { useGetAllBlogsQuery } from "../redux/api/blogApi";
import { useGetDoctorsQuery } from "../redux/api/doctorApi";
import AboutUs from "./about/AboutUs";
import Achievements from "./about/Achievements";
import doctorProfile from "../images/home/doctorProfile.jpg";
import { NavLink } from "react-router-dom";

import Lottie from "lottie-react";
import Loading from "../animations/loading.json";
import NoDataFound from "../animations/no_data_found.json";
import SomethingWrong from "../animations/something_wrong.json";

const About = () => {
  const { data, isError, isLoading } = useGetAllBlogsQuery({});
  const {
    data: doctorData,
    isLoading: DoctorIsLoading,
    isError: doctorIsError,
  } = useGetDoctorsQuery({});

  const blogData = data?.blogs;
  const doctors = doctorData?.doctors;

  let doctorContent = null;
  if (DoctorIsLoading)
    doctorContent = (
      <>
        <div className=" m-0 p-0 d-flex align-items-center justify-content-center">
          <Lottie
            loop={true}
            animationData={Loading}
            style={{ width: "300px" }}
          />
        </div>
      </>
    );

  if (!DoctorIsLoading && doctorIsError)
    doctorContent = (
      <div className="m-0 p-0 d-flex flex-column align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={SomethingWrong}
          style={{ width: "300px" }}
        />
        <div
          style={{
            color: "var(--headingColor)",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          Something went wrong!
        </div>
      </div>
    );
  if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0)
    doctorContent = (
      <div className=" m-0 p-0 d-flex align-items-center justify-content-center">
        <Lottie
          loop={true}
          animationData={NoDataFound}
          style={{ width: "300px" }}
        />
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
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Header />
      <SubHeader
        title="about us"
        subtitle="Explore the DocApoint team and our mission."
      />

      <AboutUs />
      <Achievements />

      <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="mb-4 section-title text-center">
              <h2 className="text-uppercase">Meet Our Specialist</h2>
              <p style={{ color: "var(--textLight)" }}>
                Here is our specialist registered with DocApoint
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
