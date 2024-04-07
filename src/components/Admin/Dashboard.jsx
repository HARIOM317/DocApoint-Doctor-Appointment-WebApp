import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import userImg from "../../images/user.png";
import "../../stylesheets/adminStylesheets/Dashboard.css";


import { getFromLocalStorage } from "../../utils/local-storage";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const authorizationToken = getFromLocalStorage('accessToken');
  const URL = `http://localhost:5000/api/v1/appointment/admin/appointments`;

  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);

  const fetchCounts = async () => {
    try {
      // Fetch doctor count
      const doctorResponse = await fetch("http://localhost:5000/api/v1/doctor/",
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const doctorData = await doctorResponse.json();
      setDoctorCount(doctorData.data.data.length);

      // Fetch patient count
      const patientResponse = await fetch("http://localhost:5000/api/v1/patient",
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const patientData = await patientResponse.json();
      setPatientCount(patientData.data.length);

      // Fetch appointment count
      const appointmentResponse = await fetch("http://localhost:5000/api/v1/appointment",
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const appointmentData = await appointmentResponse.json();
      setAppointmentCount(appointmentData.data.length);

      // Fetch revenue count 
      //(total revenue from all appointments currently not working due to no payment table in the database)
      const revenueResponse = await fetch("http://localhost:5000/api/v1/revenue",
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const revenueData = await revenueResponse.json();
      setRevenueCount(revenueData.totalRevenue);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

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
    fetchCounts();
  }, []);

  return (
    <>
      <AdminLayout>
      <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-primary border-primary">
                    <i className="fe fe-users"></i>
                  </span>
                  <div className="dash-count">
                    <h3>{doctorCount}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Doctors</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-success">
                    <i className="fe fe-credit-card"></i>
                  </span>
                  <div className="dash-count">
                    <h3>{patientCount}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Patients</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-danger border-danger">
                    <i className="fe fe-money"></i>
                  </span>
                  <div className="dash-count">
                    <h3>{appointmentCount}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Appointment</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-danger w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-warning border-warning">
                    <i className="fe fe-folder"></i>
                  </span>
                  <div className="dash-count">
                    <h3>${revenueCount}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Revenue</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-warning w-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-header">
                <h4 className="card-title">Appointments</h4>
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
                                  src='./images/avatar.jpg'
                                  alt=""
                                />
                              </a>
                              <a
                                href={`profile.html?id=${appointment.doctorId}`}
                              >
                                {appointment.firstName}{" "}
                                {appointment.lastName}
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
                                {appointment.firstName}{" "}
                                {appointment.lastName}
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
        </div> */}
      </AdminLayout>
    </>
  );
};
export default AdminDashboard;
