import React from "react";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import "../../stylesheets/health/Diets.css";
import { NavLink } from "react-router-dom";
import dietAPI from "../../apis/dietAPI";
import { truncate } from "../../utils/truncate";

const Diets = () => {
  return (
    <>
      <DashboardLayout>
        <div className="row diets">
          {dietAPI.map((item, index) => {
            return (
              <>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-3"
                  key={index}
                >
                  <div className="info-card">
                    <span className="diet-img">
                      <img src={item.img} alt="" />
                    </span>

                    <div className="content" style={{ marginTop: "20px" }}>
                      <div className="name">
                        <span className="diet-name">
                          {truncate(item.goal_name, 20)}
                        </span>
                      </div>

                      <p className="diet-benefits">
                        {truncate(item.description, 100)}
                      </p>

                      <div className="btn">
                        <NavLink to={item.path} className="show-btn">
                          View{" "}
                          <span style={{ fontSize: "8px" }}>
                            <i class="fa-solid fa-angles-right"></i>
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </DashboardLayout>
    </>
  );
};
export default Diets;
