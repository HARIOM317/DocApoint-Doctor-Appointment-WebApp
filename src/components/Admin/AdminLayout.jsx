import React from "react";
import AdminSidebar from "../UI/AdminSidebar";
import AdminHeader from "../UI/AdminHeader";
import "../../stylesheets/adminStylesheets/AdminLayout.css";
import Header from "../Shared/Header/Header";

const AdminLayout = ({ children }) => {
  return (
    <div className="main-wrapper">
      {/* <AdminHeader /> */}
      <Header />

      <AdminSidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3
                  style={{
                    color: "var(--headingColor)",
                    fontWeight: "500",
                    fontSize: "1.5rem",
                  }}
                >
                  Welcome Administrator!
                </h3>
                <ul className="breadcrumb">
                  <li
                    style={{
                      color: "var(--textLight)",
                      fontSize: "1rem",
                    }}
                  >
                    Welcome back in your dashboard
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
