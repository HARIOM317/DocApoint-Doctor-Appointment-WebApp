import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import "../../stylesheets/adminStylesheets/Dashboard.css";

import { getFromLocalStorage } from "../../utils/local-storage";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const authorizationToken = getFromLocalStorage("accessToken");
  const URL = `http://localhost:5000/api/v1/appointment/admin/appointments`;

  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);

  const fetchCounts = async () => {
    try {
      // Fetch doctor count
      const doctorResponse = await fetch(
        "http://localhost:5000/api/v1/doctor/",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const doctorData = await doctorResponse.json();
      setDoctorCount(doctorData.data.data.length);

      // Fetch patient count
      const patientResponse = await fetch(
        "http://localhost:5000/api/v1/patient",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const patientData = await patientResponse.json();
      setPatientCount(patientData.data.length);

      // Fetch appointment count
      const appointmentResponse = await fetch(
        "http://localhost:5000/api/v1/appointment",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const appointmentData = await appointmentResponse.json();
      setAppointmentCount(appointmentData.data.length);

      // Fetch revenue count
      //(total revenue from all appointments currently not working due to no payment table in the database)
      const revenueResponse = await fetch(
        "http://localhost:5000/api/v1/revenue",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
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
          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon first-icon">
                <i class="fa-solid fa-user-doctor"></i>
              </span>

              <h3 className="info-count">{doctorCount}</h3>

              <p className="info-label">Total Doctors</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon second-icon">
                <i class="fa-solid fa-hospital-user"></i>
              </span>

              <h3 className="info-count">{patientCount}</h3>

              <p className="info-label">Total Patients</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon third-icon">
                <i class="fa-solid fa-calendar-check"></i>
              </span>

              <h3 className="info-count">{appointmentCount}</h3>

              <p className="info-label">Total Appointment</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon forth-icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </span>

              <h3 className="info-count" style={{ fontSize: "1.5rem" }}>
                {/* Rs. {revenueCount} */}
                Rs. 11996
              </h3>

              <p className="info-label">Total Revenue</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default AdminDashboard;
