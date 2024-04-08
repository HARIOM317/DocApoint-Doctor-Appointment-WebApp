import React from "react";
import "../../stylesheets/UIStylesheets/AdminSidebar.css";
import { FaHome, FaListUl, FaRegStar, FaRegAddressCard, FaRegCommentDots, FaBlog, FaPrescription } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner">
        <nav id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li>
              <NavLink to={"/admin/dashboard"}>
                <FaHome /> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/appointments"}>
                <FaListUl /> <span>Appointments</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/doctors"}>
                <i class="fa-solid fa-user-doctor"></i> <span>Doctors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/addDoctor"}>
                <FaRegAddressCard />
                <span>Add Doctors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/patients"}>
                <i class="fa-solid fa-hospital-user"></i> <span>Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/prescription"}>
                <FaPrescription />
                <span>Prescriptions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/blogs"}>
                <FaBlog />
                <span>Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/reviews"}>
                <FaRegStar /> <span>Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/contact"}>
                <FaRegCommentDots /> <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
