import React, { useState, useEffect } from "react";
import userImg from "../../images/avatar.jpg";
import { getFromLocalStorage } from "../../utils/local-storage";
import AdminLayout from "./AdminLayout";
import "../../stylesheets/adminStylesheets/Appointments.css";
import { Tag, Tooltip } from "antd";
import { clickToCopyClipBoard } from "../../utils/copyClipBoard";
import { NavLink } from "react-router-dom";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const authorizationToken = getFromLocalStorage("accessToken");
  const URL = `http://localhost:5000/api/v1/appointment/admin/appointments`;

  const fetchAppointments = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setAppointments(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);
  return (
    <>
      <AdminLayout>
        <div className="row my-5">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-header table-top-heading">
                <h4 className="card-title">Appointments</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr
                        style={{
                          borderBottom: "1.5px solid var(--borderColor)",
                        }}
                      >
                        <th>Patient Name</th>
                        <th>Tracking ID</th>
                        <th>Appointment Time</th>
                        <th>Status</th>
                        <th>Payment Status</th>
                        <th>Prescription Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr
                          key={appointment.id}
                          style={{
                            borderBottom: "1px solid var(--borderColor)",
                          }}
                        >
                          <td>
                            <span className="table-data">
                              <NavLink
                                className="table-data"
                                to={"/track-appointment"}
                              >
                                {appointment.firstName} {appointment.lastName}
                              </NavLink>
                            </span>
                          </td>
                          <td>
                            <Tooltip
                              title="Copy Tracking ID"
                              className="tracking-id"
                            >
                              <Tag
                                color="#f2e6e8"
                                onClick={() =>
                                  clickToCopyClipBoard(appointment.trackingId)
                                }
                                style={{
                                  color: "var(--textColor)",
                                  border: "1.5px solid #bfb5b7",
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                  padding: "2px 8px",
                                  marginBottom: "10px",
                                  cursor: "pointer",
                                }}
                              >
                                {appointment.trackingId}
                              </Tag>
                            </Tooltip>
                          </td>
                          <td>
                            <span className="table-data">
                              {
                                appointment.scheduleDate
                                  .toString()
                                  .split(" ")[0]
                              }
                            </span>
                            <span className="table-data ">
                              <Tag
                                color="#dbfff0"
                                style={{
                                  color: "var(--textColor)",
                                  border: "1.5px solid #afccc0",
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                  marginLeft: "10px",
                                }}
                              >
                                {appointment.scheduleTime}
                              </Tag>
                            </span>
                          </td>
                          <td>
                            <span className="table-data">
                              {appointment.status}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">
                              {appointment.paymentStatus}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">
                              {appointment.prescriptionStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default AdminAppointments;
