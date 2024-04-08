import React from "react";
import { Link, NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Tag } from "antd";
import "../../../stylesheets/doctorStylesheets/DoctorProfileView.css";
import useAuthCheck from "../../../redux/hooks/useAuthCheck";
import { useGetDoctorReviewsQuery } from '../../../redux/api/reviewsApi';


import {
  FaRegThumbsUp,
  FaRupeeSign,
  FaComment,
} from "react-icons/fa";
import doctorProfile from "../../../images/home/doctorProfile.jpg";

const DoctorProfileView = ({ data }) => {
  const { role } = useAuthCheck();
  const services = data?.services?.split(",");

  const { data : reviewData, isError, isLoading } = useGetDoctorReviewsQuery(data.id);

  const reviewDataLen = reviewData ? reviewData.length : 0;

  const linkedinLink = `${data.linkedin}`;
  const facebookLink = `${data.facebook}`;
  const instagramLink = `${data.instagram}`;
  const twitterLink = `${data.twitter}`;


  return (
    <div className="mb-4 profile-section">
      <div className="d-flex p-3 justify-content-between">
        <div className="d-flex gap-3">
          <div className="doc-img d-flex align-items-center">
            <img
              src={data.img == null ? doctorProfile : data?.img}
              alt="Doctor Image"
            />
          </div>
          <div className="doc-profile d-flex flex-column justify-content-between">
            <div className=" ">
              <div className="doctor-name">
                Dr. {data?.firstName + " " + data?.lastName}
              </div>

              <p className="doctor-detail my-3">
                <i
                  class="fa-solid fa-hand-holding-medical"
                  style={{ fontSize: "1.3rem", marginRight: "6px" }}
                ></i>{" "}
                {data?.specialization ? data?.specialization : "N/A"}
              </p>

              <p className="doctor-detail my-3">
                <i
                  class="fa-solid fa-map-location-dot"
                  style={{ fontSize: "1.3rem", marginRight: "6px" }}
                ></i>{" "}
                {data?.city} {data?.city ? ", " : "Bhopal , In"} {data?.country}
              </p>

              {services?.map((item, id) => (
                <Tag key={id + 51} className="tags">
                  {item}
                </Tag>
              ))}

              <div className="d-flex align-items-center my-3">
                <div>
                  <StarRatings
                    rating={4.5}
                    starRatedColor="#f4c150"
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                </div>
                <div> {reviewDataLen}</div>
              </div>
            </div>

            <div className="social-media-icons">
              <NavLink to={linkedinLink} style={{ background: "#0a63bc" }} target="_blank">
                <i className="bx bxl-linkedin"></i>
              </NavLink>
              <NavLink to={facebookLink} style={{ background: "#3b5998" }} target="_blank">
                <i className="bx bxl-facebook"></i>
              </NavLink>
              <NavLink to={instagramLink} style={{ background: "#db1c8a" }} target="_blank">
                <i className="bx bxl-instagram"></i>
              </NavLink>
              <NavLink to={twitterLink} style={{ background: "#03a9f4" }} target="_blank">
                <i className="bx bxl-twitter"></i>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="doc-info-right me-3">
          <div className="clini-infos d-flex flex-column justify-content-between h-100">
            <ul>
              <li className="mb-2" style={{ fontSize: "1rem" }}>
                <FaRegThumbsUp /> 97%
              </li>

              <li className="mb-2" style={{ fontSize: "1rem" }}>
                <FaComment /> {reviewDataLen} Feedback
              </li>

              <li className="mb-2" style={{ fontSize: "1rem" }}>
                <FaRupeeSign /> {data?.price ? data?.price : "50"}
              </li>
            </ul>

            {role === "patient" && (
              <div className="doctor-booking">
                <Link to={`/booking/${data?.id}`} className="apt-btn">
                  Book Appointment
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorProfileView;
