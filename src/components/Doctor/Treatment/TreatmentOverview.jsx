import { Link } from "react-router-dom";
import profileImg from "../../../images/user.png";
import {
  FaClock,
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import moment from "moment";
import { Tag } from "antd";
import "../../../stylesheets/doctorStylesheets/Treatment.css";

const TreatmentOverview = ({ data, isAppointment = false }) => {
  console.log({ data });
  // console.log(data.firstName);
  return (
    <>
      <div className="w-100 mb-3 rounded p-3 text-center d-flex justify-content-between bg-gray-g">
        <div className="container row">
          <div className="col-5 p-2 ">
            <div className="treatment">
              <Link to={"/"} className="my-3 patient-img">
                <img
                  src={data?.patient?.img ? data?.patient?.img : profileImg}
                  alt=""
                  style={{ height: "90px", width: "90px" }}
                />
              </Link>
              <div className="patients-info">
                <h5 className="patient-name">
                  {data?.firstName + " " + data?.lastName}
                </h5>

                <p className="patient-data">
                  <FaClock className="icon" />{" "}
                  {moment(data?.createdAt).format("LL")}{" "}
                </p>
                <p className="patient-data">
                  <FaLocationArrow className="icon" /> {data?.address}
                </p>
                <p className="patient-data">
                  <FaEnvelope className="icon" /> {data?.email}
                </p>
                <p className="patient-data">
                  <FaPhoneAlt className="icon" /> {data?.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="col-7 px-5">
            <h5>Patient Overview</h5>
            <hr />
            <div className="p-2 rounded">
              <p className="form-text text-start m-0">
                {data?.appointment?.description
                  ? data?.appointment?.description
                  : data?.description}
              </p>
            </div>

            <div className="text-start mt-3">
              <h6>
                Patient Type :
                <span className="btn-status btn-st-success">
                  <Tag color="#87d068" className="ms-2 text-uppercase">
                    {isAppointment ? data?.appointment?.patientType : "Normal"}
                  </Tag>
                </span>
              </h6>
              <h6>
                Current Status :
                <span className="btn-status btn-st-danger">
                  <Tag color="#f50" className="ms-2 text-uppercase">
                    {isAppointment ? data?.appointment?.status : data?.status}
                  </Tag>
                </span>
              </h6>
              <h6>
                Payment Status :
                <span className="btn-status btn-st-success">
                  <Tag color="#87d068" className="ms-2 text-uppercase">
                    {isAppointment
                      ? data?.appointment?.paymentStatus
                      : data?.paymentStatus}
                  </Tag>
                </span>
              </h6>
              <h6>
                Prescription Status :
                <span className="btn-status btn-st-danger">
                  <Tag color="#2db7f5" className="ms-2 text-uppercase">
                    {isAppointment
                      ? data?.appointment?.prescriptionStatus
                      : data?.prescriptionStatus}
                  </Tag>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 mb-3 rounded p-2 text-start bg-gray-g">
        <Link to={"/"}>Show Previous Medical History ? </Link>
      </div>
    </>
  );
};
export default TreatmentOverview;
