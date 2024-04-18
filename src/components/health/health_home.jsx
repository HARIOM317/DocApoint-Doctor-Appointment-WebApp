import React from "react";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import "../../stylesheets/health/HealthHome.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const HealthHome = () => {
  return (
    <>
      <DashboardLayout>
        <div className="row health-home">
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon first-icon">
                <i class="fa-solid fa-dumbbell"></i>
              </span>

              <NavLink to={"/health/exercise"} className="show-btn">
                Exercise
              </NavLink>

              <p className="info-label">View All Body Exercises</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon second-icon">
                <i class="fa-solid fa-utensils"></i>
              </span>

              <NavLink className="show-btn">Diet</NavLink>

              <p className="info-label">Manage Your Diet</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon third-icon">
                <i class="fa-solid fa-user-shield"></i>
              </span>

              <NavLink className="show-btn">Preventions</NavLink>

              <p className="info-label">View Suggested Preventions</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon forth-icon">
                <i class="fa-solid fa-gauge"></i>
              </span>

              <NavLink className="show-btn">Health Profile</NavLink>

              <p className="info-label">View Your Health Report</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default HealthHome;
