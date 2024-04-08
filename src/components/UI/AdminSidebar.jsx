import React from "react";
import "../../stylesheets/UIStylesheets/AdminSidebar.css";
import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
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
              <NavLink to={"/admin/appointments"} >
                <FaListUl /> <span>Appointments</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/doctors"}>
                <FaUserAstronaut /> <span>Doctors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/addDoctor"}>
                <FaPlusCircle />
                <span>Add Doctors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/patients"}>
                <FaRegUser /> <span>Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/reviews"}>
                <FaRegStar /> <span>Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/contact"}>
                <FaUserAstronaut /> <span>Contact</span>
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
