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
          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon first-icon">
                <i class="fa-solid fa-dumbbell"></i>
              </span>

              <Button className="show-btn">
                <NavLink to={"/health/exercise"}>Exercise</NavLink>
              </Button>

              <p className="info-label">Show Body Exercises</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon second-icon">
                <i class="fa-solid fa-utensils"></i>
              </span>

              <Button className="show-btn">
                <NavLink>Diet</NavLink>
              </Button>

              <p className="info-label">Manage Your Diet</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon third-icon">
                <i class="fa-solid fa-user-shield"></i>
              </span>

              <Button className="show-btn">
                <NavLink>Preventions</NavLink>
              </Button>

              <p className="info-label">View Suggested Preventions</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon forth-icon">
                <i class="fa-solid fa-gauge"></i>
              </span>

              <Button className="show-btn">
                <NavLink>View Health Profile</NavLink>
              </Button>

              <p className="info-label">View Report</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default HealthHome;
