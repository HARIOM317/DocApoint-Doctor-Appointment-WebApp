<<<<<<< HEAD
import React from 'react'
import DoctorDashCard from './doctor/DoctorDashCard';
import useAuthCheck from '../../../redux/hooks/useAuthCheck';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import DashboardPage from './doctor/DashboardPage';
import PatientDashboard from './PatientDashboard';
=======
import React from "react";
import DoctorDashCard from "./doctor/DoctorDashCard";
import useAuthCheck from "../../../redux/hooks/useAuthCheck";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardPage from "./doctor/DashboardPage";
import PatientDashboard from "./PatientDashboard";
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6

const Dashboard = () => {
  const { role } = useAuthCheck();
  return (
    <>
      <DashboardLayout>
        {role === "doctor" && <DoctorDashCard />}

        <div className="row">
          {role === "patient" && (
<<<<<<< HEAD
            <div
              className="col-md-12 rounded"
              style={{ background: "#f8f9fa" }}
            >
=======
            <div className="col-md-12 rounded">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              <h5 className="text-title my-3">My Appointments</h5>
              <PatientDashboard />
            </div>
          )}
          {role === "doctor" && (
<<<<<<< HEAD
            <div
              className="col-md-12 rounded"
              style={{ background: "#f8f9fa" }}
            >
=======
            <div className="col-md-12 rounded">
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
              <h5 className="text-title">Appointments</h5>
              <DashboardPage />
            </div>
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
