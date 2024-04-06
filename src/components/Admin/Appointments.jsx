import React, { useState, useEffect } from "react";
// import userImg from "../../images/avatar.jpg";
import { getFromLocalStorage } from "../../utils/local-storage";
import AdminLayout from "./AdminLayout";
import "../../stylesheets/adminStylesheets/Appointments.css";

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
              <div className="card-header">
                <h4 className="card-title">Appointments (today)</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Patient Name</th>
                        <th>Appointment Time</th>
                        <th>Status</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href={`profile.html?id=${appointment.doctorId}`}
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="./images/avatar.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                href={`profile.html?id=${appointment.doctorId}`}
                              >
                                {appointment.firstName} {appointment.lastName}
                              </a>
                            </h2>
                          </td>
                          <td>Dentist</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href={`profile.html?id=${appointment.patientId}`}
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src={userImg}
                                  alt=""
                                />
                              </a>
                              <a
                                href={`profile.html?id=${appointment.patientId}`}
                              >
                                {appointment.firstName} {appointment.lastName}
                              </a>
                            </h2>
                          </td>
                          <td>
                            {appointment.scheduleDate}{" "}
                            <span className="text-primary d-block">
                              {appointment.scheduleTime}
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <label
                                htmlFor={`status_${appointment.id}`}
                                className="checktoggle"
                              >
                                {appointment.status}
                              </label>
                            </div>
                          </td>
                          <td className="text-right">$200</td>
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
