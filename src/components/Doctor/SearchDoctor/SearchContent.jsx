import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Tag } from "antd";
import "../../../stylesheets/doctorStylesheets/SearchDoctor.css";
import {
  FaLocationArrow,
  FaRegThumbsUp,
  FaRupeeSign,
  FaComment,
} from "react-icons/fa";
import doctorProfile from "../../../images/home/doctorProfile.jpg";

const SearchContent = ({ data }) => {
  const services = data?.services?.split(",");
  return (
    <div className="mb-4 rounded available-doctors">
      <div className="p-3 doctor-profile-card">
        <div className="doctor-details">
          <div className="doc-img-fluid">
            <img
              src={data.img == null ? doctorProfile : data?.img}
              className=""
              alt="Doctor Image"
            />
          </div>
          <div className="doc-info">
            <div className="doctor-name-specialization">
              <h5>
                <Link to={`/doctors/profile/${data?.id}`}>
                  Dr. {data?.firstName + " " + data?.lastName}
                </Link>
              </h5>
              <p style={{ color: "var(--textLight)" }}>
                {data?.specialization === null
                  ? data?.designation
                  : data?.specialization}
              </p>
            </div>

            <div>
              <div className="d-flex align-items-start">
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
                <div>(4)</div>
              </div>

              <div className="clinic-details">
                <p className="form-text text-secondary">
                  <FaLocationArrow /> {data?.city}{" "}
                  {data?.city ? ", " : "Bhopal , In"} {data?.country}
                </p>
              </div>
            </div>

            <div>
              {services?.map((item, id) => (
                <Tag key={id + 51}>{item}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className="doc-info-right me-3">
          <div className="clini-infos">
            <ul>
              <li>
                <FaRegThumbsUp /> 97%
              </li>
              <li>
                <FaComment /> 4 Feedback
              </li>

              <li>
                <FaRupeeSign /> {data?.price ? data?.price : "50"}
              </li>
            </ul>
          </div>
          <div className="clinic-booking">
            <Link to={`/doctors/profile/${data?.id}`} className="view-pro-btn">
              View Profile
            </Link>
            <Link to={`/booking/${data?.id}`} className="apt-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchContent;
