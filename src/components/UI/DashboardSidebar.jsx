import React, { useEffect, useState } from "react";
import img from "../../images/user.png";
import adminImg from "../../images/admin.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthCheck from "../../redux/hooks/useAuthCheck";
import { loggedOut } from "../../service/auth.service";
import { message } from "antd";
import "../../stylesheets/UIStylesheets/DashboardSidebar.css";

import {
  FaTable,
  FaCalendarPlus,
  FaPrescription,
  FaClock,
  FaFileInvoice,
  FaStar,
  FaRegStar,
  FaUserCog,
  FaBlog,
  FaSignOutAlt,
  FaLock,
  FaHeartbeat,
  FaHome,
  FaListUl,
  FaRegAddressCard,
  FaRegCommentDots,
} from "react-icons/fa";


function formatDate(date) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const DashboardSidebar = () => {
  const { authChecked, data, role } = useAuthCheck();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLogged] = useState(false);

  useEffect(() => {
    authChecked && setIsLogged(true);
  }, [authChecked]);

  const hanldeSignOut = () => {
    loggedOut();
    message.success("Successfully Logged Out");
    setIsLogged(false);
    navigate("/");
  };

  const dateObject = new Date(data?.dateOfBirth);

  // Format date object to desired format
  const formattedDate = formatDate(dateObject);

  // Calculate age
  const age = calculateAge(data?.dateOfBirth);

  return (
    <div className="profile-sidebar p-3 rounded">
      <div className="p-2 text-center border-bottom">
        {role === "doctor" ? (
          <div className="profile-info text-center">
            <Link to={"/dashboard/profile-setting"}>
              <img src={data?.img ? data?.img : img} alt="DOCTOR" />
            </Link>
            <div className="profile-details">
              <h5 className="mb-0">{data?.firstName + " " + data?.lastName}</h5>
              <div>
                <p className="mb-0">{data?.specialization}</p>
              </div>
            </div>
          </div>
        ) : role === "patient" ? (
          <div className="profile-info text-center">
            <Link to={"/dashboard/profile-setting"}>
              <img src={data?.img ? data?.img : img} alt="USER" />
            </Link>
            <div className="profile-details">
              <h5 className="mb-0">{data?.firstName + " " + data?.lastName}</h5>
              <div className="mt-2">
                <p className=" form-text m-0">
                  {data?.dateOfBirth
                    ? formattedDate + " - " + age + "Y"
                    : data?.dateOfBirth}
                </p>
                <p className=" form-text m-0">
                  {data?.city ? data?.city : data?.city},{" "}
                  {data?.country ? data?.country : data?.country}
                </p>
                <p className=" form-text m-0">{data?.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-info text-center">
            <Link to={"/dashboard/profile-setting"}>
              <img src={adminImg} alt="ADMIN" />
            </Link>
            <div className="profile-details">
              <h5 className="mb-0">Administrator</h5>
            </div>
          </div>
        )}
      </div>
      <nav className="dashboard-menu">
        {role === "patient" ? (
          <ul>
            <li>
              <NavLink to={"/dashboard"} activeClassName="active" end>
                <FaTable className="icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/health"} activeClassName="active" end>
                <FaHeartbeat className="icon" />
                <span>Manage Health</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/favourite"} activeClassName="active">
                <FaStar className="icon" />
                <span>Favorites</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/profile-setting"}
                activeClassName="active"
              >
                <FaUserCog className="icon" />
                <span>Profile Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/change-password"}
                activeClassName="active"
              >
                <FaLock className="icon" />
                <span>Change Password</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FaSignOutAlt className="icon" />
                <span onClick={hanldeSignOut}>Logout</span>
              </NavLink>
            </li>
          </ul>
        ) : role === "doctor" ? (
          <ul>
            <li>
              <NavLink to={"/dashboard"} activeClassName="active" end>
                <FaTable className="icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/appointments"}
                activeClassName="active"
                end
              >
                <FaCalendarPlus className="icon" />
                <span>Appointments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/my-patients"}
                activeClassName="active"
                end
              >
                <i class="fa-solid fa-user-group icon"></i>
                <span>My Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/prescription"}
                activeClassName="active"
                end
              >
                <FaPrescription className="icon" />
                <span>Prescription</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/schedule"} activeClassName="active" end>
                <FaClock className="icon" />
                <span>Schedule Timings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/invoices"} activeClassName="active" end>
                <FaFileInvoice className="icon" />
                <span>Invoices</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/reviews"} activeClassName="active" end>
                <FaRegStar className="icon" />
                <span>Reviews</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/profile-setting"}
                activeClassName="active"
                end
              >
                <FaUserCog className="icon" />
                <span>Profile Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/blogs"} activeClassName="active" end>
                <FaBlog className="icon" />
                <span>Blogs (Will move to Admin)</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/change-password"}
                activeClassName="active"
                end
              >
                <FaLock className="icon" />
                <span>Change Password</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FaSignOutAlt className="icon" end />
                <span onClick={hanldeSignOut}>Logout</span>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to={"/admin/dashboard"} activeClassName="active" end>
                <FaHome className="icon" /> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/emergency"} activeClassName="active" end>
                <i class="fa-solid fa-tower-broadcast icon"></i>
                <span>Emergencies</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/ambulance"} activeClassName="active" end>
                <i class="fa-solid fa-truck-medical icon"></i>
                <span>Ambulance</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/appointments"} activeClassName="active" end>
                <FaListUl className="icon" /> <span>Appointments</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/doctors"} activeClassName="active" end>
                <i class="fa-solid fa-user-doctor icon"></i>{" "}
                <span>Doctors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/addDoctor"} activeClassName="active" end>
                <FaRegAddressCard className="icon" />
                <span>Add Doctors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/patients"} activeClassName="active" end>
                <i class="fa-solid fa-hospital-user icon"></i>{" "}
                <span>Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/prescription"} activeClassName="active" end>
                <FaPrescription className="icon" />
                <span>Prescriptions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/blogs"} activeClassName="active" end>
                <FaBlog className="icon" />
                <span>Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/reviews"} activeClassName="active" end>
                <FaRegStar className="icon" /> <span>Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/contact"} activeClassName="active" end>
                <FaRegCommentDots className="icon" /> <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
export default DashboardSidebar;
