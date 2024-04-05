<<<<<<< HEAD
import React from 'react'
import img from '../../images/user.png';
import "../../stylesheets/TrackAppointment.css";
import { FaCalendarCheck, FaRegClock, FaArrowAltCircleLeft } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import AppointmentTimeLine from './AppointmentTimeLine';
import { appointStatusDsc } from '../../constant/appointmentStatus';
import moment from 'moment';
import { Button } from 'antd';
=======
import React from "react";
import img from "../../images/user.png";
import "../../stylesheets/TrackAppointment.css";
import {
  FaCalendarCheck,
  FaRegClock,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import AppointmentTimeLine from "./AppointmentTimeLine";
import { appointStatusDsc } from "../../constant/appointmentStatus";
import moment from "moment";
import { Button } from "antd";
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6

const TrackDetailPage = ({ data, setShowInfo }) => {
  const patinetFirstName = data?.patient?.firstName
    ? data?.patient?.firstName
    : data?.firstName;
  const patinetLastName = data?.patient?.lastName
    ? data?.patient?.lastName
    : data?.lastName;
  const doctorFirstName = data?.doctor?.firstName
    ? data?.doctor?.firstName
    : "Not Setup yet";
  const doctorLastName = data?.doctor?.lastName ? data?.doctor?.lastName : "";
  return (
    <>
      <div className="container mb-2" style={{ marginTop: "8rem" }}>
        <Button
          type="primary"
          icon={<FaArrowAltCircleLeft />}
          size="medium"
          onClick={() => setShowInfo(false)}
        >
          Back
        </Button>
      </div>
      <div className="container track-detail rounded">
        <div className="row">
<<<<<<< HEAD
          <div className="col-md-4">
            <div className="d-flex flex-column gap-4 justify-content-around">
              <div className="card shadow-sm p-3 text-center shadow border-0 bg-success">
                <div className="text-white">
                  <h6 className="text-start text-primary text-uppercase text-black">
                    Patient
                  </h6>
=======
          {/* Profile Card */}
          <div className="col-md-4">
            <div className="d-flex flex-column gap-4 justify-content-around">
              {/* Patient Card */}
              <div className="card p-3 text-center profile-card">
                <div className="text-white">
                  <h6 className="text-start label">Patient</h6>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  <div className="d-flex gap-2">
                    <div className="img-div">
                      {data?.patient?.img ? (
                        <img src={data?.patient?.img} alt="" />
                      ) : (
                        <img src={img} alt="" />
                      )}
                    </div>
                    <div className="text-start">
<<<<<<< HEAD
                      <h6 className="mb-0 text-white">
                        {patinetFirstName + " " + patinetLastName}
                      </h6>
                      <p className="form-text text-white">
=======
                      <h6 className="name">
                        {patinetFirstName + " " + patinetLastName}
                      </h6>
                      <p className="address">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                        {data?.patient?.address &&
                          data?.patient?.address + "," + data?.patient?.city &&
                          data?.patient?.city}
                        <br />{" "}
                        {data?.patient?.state + "," + data?.patient?.country &&
                          data?.patient?.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              <div className=" card shadow-sm p-3 text-center shadow border-0 bg-danger text-white">
                <div>
                  <h6 className="text-start text-uppercase text-black">
                    Doctor
                  </h6>
=======
              {/* Doctor Card */}
              <div className="card p-3 text-center profile-card">
                <div>
                  <h6 className="text-start label">Doctor</h6>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                  <div className="d-flex gap-2">
                    <div className="img-div">
                      {data?.doctor?.img ? (
                        <img src={data?.doctor?.img} alt="" />
                      ) : (
                        <img src={img} alt="" />
                      )}
                    </div>
                    <div className="text-start">
<<<<<<< HEAD
                      <h6 className="mb-0 text-white">
                        {doctorFirstName + " " + doctorLastName}
                      </h6>
                      <p className="form-text text-white">
                        {data?.doctor?.designation}
                      </p>
=======
                      <h6 className="name">
                        {doctorFirstName + " " + doctorLastName}
                      </h6>
                      <p className="address">{data?.doctor?.designation}</p>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className="col-md-8">
            <h4 className="text-center text-capitalized">
              Status : {data?.status}
            </h4>
            <p className="px-5 form-text text-center">
              {appointStatusDsc.appointment[data?.status]}
            </p>

            <div className="d-flex justify-content-center mt-4">
              <div className="text-center">
                <h5>Meeting Schedule: </h5>
                <div className="text-secondary text-start">
                  <FaCalendarCheck className="me-2" />
                  Appointment Date :{" "}
                  {moment(data?.scheduleDate).format("MMM Do YY")}
                </div>
                <div className="text-secondary text-start">
                  <FaRegClock className="me-2" />
                  Appointment Time : {data?.scheduleTime}
=======
          {/* Appointment Details */}
          <div className="col-md-8">
            <div className="detail-card">
              <h4 className="text-start text-capitalized">
                Status : {data?.status}
              </h4>
              <p className="text-secondary text-start my-2">
                {appointStatusDsc.appointment[data?.status]}
              </p>

              <div className="d-flex justify-content-start mt-4">
                <div className="text-start">
                  <h4>Meeting Schedule</h4>
                  <div className="text-secondary text-start my-2">
                    <FaCalendarCheck className="me-2" />
                    Appointment Date :{" "}
                    {moment(data?.scheduleDate).format("MMM Do YY")}
                  </div>
                  <div className="text-secondary text-start my-2">
                    <FaRegClock className="me-2" />
                    Appointment Time : {data?.scheduleTime}
                  </div>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div>
          <h4 className="text-center mt-4 text-uppercase">
            Appointment Timeline:{" "}
          </h4>
=======
        <div style={{ marginTop: "5rem" }}>
          <div className="text-center mb-5">
            <div className="section-title mb-3">
              <h2>Appointment Timeline</h2>
              <p>Here is the timeline of your appointment</p>
            </div>
          </div>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
          <AppointmentTimeLine data={data} />
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default TrackDetailPage;
=======
export default TrackDetailPage;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
