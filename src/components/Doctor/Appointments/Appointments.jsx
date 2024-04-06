import React, { useEffect, useState } from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import img from "../../../images/doc/doctor 3.jpg";
import "../../../stylesheets/doctorStylesheets/Appointments.css";
import {
  useGetDoctorAppointmentsQuery,
  useUpdateAppointmentMutation,
} from "../../../redux/api/appointmentApi";
import moment from "moment";
import { Button, Empty, message, Tag, Tooltip } from "antd";
import { FaEye, FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { clickToCopyClipBoard } from "../../../utils/copyClipBoard";

const Appointments = () => {
  const { data, isError, isLoading } = useGetDoctorAppointmentsQuery({});
  const [updateAppointment, { isError: updateIsError, isSuccess, error }] =
    useUpdateAppointmentMutation();

  const updatedApppointmentStatus = (id, type) => {
    const changeObj = {
      status: type,
    };
    if (id) {
      updateAppointment({ id, data: changeObj });
    }
  };


  useEffect(() => {
    if (isSuccess) {
      message.success("Successfully Appointment Updated");
    }
    if (isError) {
      message.error(error?.data?.message);
    }
  }, [isSuccess, updateIsError, error]);

  let content = null;
  if (!isLoading && isError) content = <div>Something Went Wrong !</div>;
  if (!isLoading && !isError && data?.length === 0) content = <Empty />;
  if (!isLoading && !isError && data?.length > 0)
    content = (
      <>
        {data &&
          data.map((item) => (
            // <div
            //   className="w-100 mb-3 rounded p-3"
            //   key={item.id}
            // >
            //   <div className="d-flex justify-content-between align-items-center">
            //     <div className="d-flex align-items-center gap-3">
            //       <Link to={`/`} className="patient-img">
            //         {/* <img src={img} alt="" /> */}
            //         <img
            //           src={item?.patient?.img ? item?.patient?.img : img}
            //           alt=""
            //         />
            //       </Link>
            //       <div className="patients-info">
            //         <h5>{item?.firstName + " " + item?.lastName}</h5>
            //         <Tooltip title="Copy Tracking Id">
            //           <Button>
            //             <h6>
            //               Tracking
            //               <Tag
            //                 color="#87d068"
            //                 className="ms-2 text-uppercase"
            //                 onClick={() =>
            //                   clickToCopyClipBoard(item?.trackingId)
            //                 }
            //               >
            //                 {item?.trackingId}
            //               </Tag>
            //             </h6>
            //           </Button>
            //         </Tooltip>

            //         <div className="info">
            //           <p>
            //             <FaClock className="icon" />{" "}
            //             {moment(item?.appointmentTime).format("MMM Do YY")}{" "}
            //           </p>
            //           <p>
            //             <FaLocationArrow className="icon" /> {item?.address}
            //           </p>
            //           <p>
            //             <FaEnvelope className="icon" /> {item?.email}
            //           </p>
            //           <p>
            //             <FaPhoneAlt className="icon" /> {item?.phone}
            //           </p>
            //         </div>
            //       </div>
            //       <div className="appointment-status card p-3 border-primary">
            //         <p>
            //           Current Status -{" "}
            //           <Tag color="#f50" className="text-uppercase">
            //             {item?.status}
            //           </Tag>
            //         </p>
            //         <p>
            //           Patient Status -{" "}
            //           <Tag color="#2db7f5" className="text-uppercase">
            //             {item?.patientType ? item?.patientType : "Normal"}
            //           </Tag>
            //         </p>
            //         <p>
            //           Is Follow Up -{" "}
            //           <Tag color="#f50" className="text-uppercase">
            //             {item?.isFollowUp ? "Yes" : "No"}
            //           </Tag>
            //         </p>
            //         <p>
            //           {" "}
            //           Is Paid -{" "}
            //           <Tag color="#87d068" className="text-uppercase">
            //             {item?.paymentStatus}
            //           </Tag>
            //         </p>
            //         <p>
            //           {" "}
            //           Prescribed -{" "}
            //           <Tag color="#2db7f5" className="text-uppercase">
            //             {item?.prescriptionStatus}
            //           </Tag>
            //         </p>
            //       </div>
            //     </div>
            //     <div className="d-flex gap-2">
            //       <Link to={`/dashboard/appointments/${item?.id}`}>
            //         <Button type="primary" icon={<FaEye />} size="small">
            //           View
            //         </Button>
            //       </Link>
            //       {item.prescriptionStatus === "notIssued" ? (
            //         <Link to={`/dashboard/appointment/treatment/${item?.id}`}>
            //           <Button
            //             type="primary"
            //             icon={<FaBriefcaseMedical />}
            //             size="small"
            //           >
            //             Treatment
            //           </Button>
            //         </Link>
            //       ) : (
            //         <Link
            //           to={`/dashboard/prescription/${item?.prescription[0]?.id}`}
            //         >
            //           <Button type="primary" icon={<FaEye />} size="small">
            //             Prescription
            //           </Button>
            //         </Link>
            //       )}
            //       {item?.isFollowUp && (
            //         <Link
            //           to={`/dashboard/appointment/treatment/edit/${item?.prescription[0]?.id}`}
            //         >
            //           <Button
            //             type="primary"
            //             icon={<FaBriefcaseMedical />}
            //             size="small"
            //           >
            //             Follow Up
            //           </Button>
            //         </Link>
            //       )}

            //       {item?.status === "pending" && (
            //         <>
            //           <Button
            //             type="primary"
            //             icon={<FaCheck />}
            //             size="small"
            //             onClick={() =>
            //               updatedApppointmentStatus(item.id, "scheduled")
            //             }
            //           >
            //             Accept
            //           </Button>
            //           <Button
            //             type="primary"
            //             icon={<FaTimes />}
            //             size="small"
            //             danger
            //             onClick={() =>
            //               updatedApppointmentStatus(item.id, "cancel")
            //             }
            //           >
            //             Cancel
            //           </Button>
            //         </>
            //       )}
            //     </div>
            //   </div>
            // </div>

            <div className="d-flex justify-content-between flex-row appointment-details">
              <div className="profile-card">
                <div className="image">
                  <img
                    className="profile-img"
                    alt=""
                    src={item?.patient?.img ? item?.patient?.img : img}
                  />
                </div>

                <h5>{item?.firstName + " " + item?.lastName}</h5>

                <Tooltip title="Copy Tracking Id">
                  <Button>
                    <h6>
                      Tracking
                      <Tag
                        color="#87d068"
                        className="ms-2 text-uppercase"
                        onClick={() => clickToCopyClipBoard(item?.trackingId)}
                      >
                        {item?.trackingId}
                      </Tag>
                    </h6>
                  </Button>
                </Tooltip>

                <div className="w-100">
                  <p className="text-data">
                    <FaClock className="icon" />{" "}
                    {moment(item?.appointmentTime).format("MMM Do, YY")}{" "}
                  </p>

                  <p className="text-data">
                    <FaLocationArrow className="icon" /> {item?.address}
                  </p>

                  <p className="text-data">
                    <FaEnvelope className="icon" /> {item?.email}
                  </p>
                  <p className="text-data">
                    <FaPhoneAlt className="icon" /> {item?.phone}
                  </p>
                </div>
              </div>

              <div className="profile-card d-flex flex-column align-items-center justify-content-between">
                <div className="w-100">
                  <p className="text-data">
                    Current Status -{" "}
                    <Tag color="#f50" className="text-uppercase">
                      {item?.status}
                    </Tag>
                  </p>
                  <p className="text-data">
                    Patient Status -{" "}
                    <Tag color="#2db7f5" className="text-uppercase">
                      {item?.patientType ? item?.patientType : "Normal"}
                    </Tag>
                  </p>
                  <p className="text-data">
                    Is Follow Up -{" "}
                    <Tag color="#f50" className="text-uppercase">
                      {item?.isFollowUp ? "Yes" : "No"}
                    </Tag>
                  </p>
                  <p className="text-data">
                    {" "}
                    Is Paid -{" "}
                    <Tag color="#87d068" className="text-uppercase">
                      {item?.paymentStatus}
                    </Tag>
                  </p>
                  <p className="text-data">
                    {" "}
                    Prescribed -{" "}
                    <Tag color="#2db7f5" className="text-uppercase">
                      {item?.prescriptionStatus}
                    </Tag>
                  </p>
                </div>

                <div className="d-flex gap-2 flex-column w-100">
                  <div className="d-flex flex-row align-items-center justify-content-between gap-3">
                    <Link to={`/dashboard/appointments/${item?.id}`}>
                      <Button type="primary" icon={<FaEye />} size="small">
                        View
                      </Button>
                    </Link>
                    {item.prescriptionStatus === "notIssued" ? (
                      <Link to={`/dashboard/appointment/treatment/${item?.id}`}>
                        <Button
                          type="primary"
                          icon={<FaBriefcaseMedical />}
                          size="small"
                        >
                          Treatment
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        to={`/dashboard/prescription/${item?.prescription[0]?.id}`}
                      >
                        <Button type="primary" icon={<FaEye />} size="small">
                          Prescription
                        </Button>
                      </Link>
                    )}
                    {item?.isFollowUp && (
                      <Link
                        to={`/dashboard/appointment/treatment/edit/${item?.prescription[0]?.id}`}
                      >
                        <Button
                          type="primary"
                          icon={<FaBriefcaseMedical />}
                          size="small"
                        >
                          Follow Up
                        </Button>
                      </Link>
                    )}
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-between gap-3">
                    {item?.status === "pending" && (
                      <>
                        <Button
                          type="primary"
                          icon={<FaCheck />}
                          size="small"
                          onClick={() =>
                            updatedApppointmentStatus(item.id, "scheduled")
                          }
                        >
                          Accept
                        </Button>
                        <Button
                          type="primary"
                          icon={<FaTimes />}
                          size="small"
                          danger
                          onClick={() =>
                            updatedApppointmentStatus(item.id, "cancel")
                          }
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  return (
    <DashboardLayout>
      <div className="appointments">{content}</div>
    </DashboardLayout>
  );
};

export default Appointments;
