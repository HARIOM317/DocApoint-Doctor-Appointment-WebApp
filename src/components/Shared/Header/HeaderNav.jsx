import React, { useState } from "react";
import { Popover } from "antd";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Drawer, Button, Modal } from "antd";
import { DatePicker, Select } from "antd";
import adminAvatar from "../../../images/admin.png";
import useAuthCheck from "../../../redux/hooks/useAuthCheck";
import {
  FaHome,
  FaPhoneAlt,
  FaWrench,
  FaUserMd,
  FaAddressBook,
  FaBloggerB,
  FaSignInAlt,
  FaBroadcastTower
} from "react-icons/fa";
import "../../../stylesheets/doctorStylesheets/ProfileSetting.css";

const HeaderNav = ({ open, setOpen, isLoggedIn, data, avatar, content }) => {
  const { role } = useAuthCheck();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectValue, setSelectValue] = useState({});

  const { Option } = Select;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value, name) => {
    setSelectValue({ ...selectValue, [name]: value });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : ""
              }
            >
              Service
            </NavLink>
          </li>
          {role === "patient" && (
            <li>
              <NavLink
                to={"/doctors"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : ""
                }
              >
                Doctors
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={showModal}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto" : ""
              }
            >
              Emergency
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to={"/login"} className="nav-link scrollto">
                Login
              </Link>
            </li>
          )}
        </ul>
        {isLoggedIn && (
          <div>
            <Popover content={content}>
              <div className="profileImage">
                <img
                  src={
                    data?.img
                      ? data?.img
                      : role === "admin"
                      ? adminAvatar
                      : avatar
                  }
                  alt=""
                  className="profileImage shadow img-fluid"
                />
              </div>
            </Popover>
          </div>
        )}
        <FaBars className="mobile-nav-toggle" onClick={showDrawer} />
      </nav>

      {/* Mobile drawer */}
      <Drawer
        placement={"right"}
        width={500}
        onClose={onClose}
        open={open}
        size={"default"}
        extra={
          <Button
            type="primary"
            onClick={onClose}
            style={{
              background: "var(--primaryColor)",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Close
          </Button>
        }
      >
        <ul className="mobile-menu-nav">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : "nav-link"
              }
            >
              <FaHome className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : "nav-link"
              }
            >
              <FaAddressBook className="icon" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : "nav-link"
              }
            >
              <FaWrench className="icon" />
              Service
            </NavLink>
          </li>
          {role === "patient" && (
            <li>
              <NavLink
                to={"/doctors"}
                className={({ isActive }) =>
                  isActive ? "nav-link scrollto active" : "nav-link"
                }
              >
                <FaUserMd className="icon" />
                Doctors
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : "nav-link"
              }
            >
              <FaPhoneAlt className="icon" />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto active" : "nav-link"
              }
            >
              <FaBloggerB className="icon" />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={showModal}
              className={({ isActive }) =>
                isActive ? "nav-link scrollto" : ""
              }
            >
              <FaBroadcastTower className="icon" /> Emergency
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to={"/login"} className="nav-link scrollto">
                <FaSignInAlt className="icon" />
                Login
              </Link>
            </li>
          )}
        </ul>
      </Drawer>

      {/* Emergency Appointment Modal */}
      <Modal
        title="Book Emergency Appointment"
        open={isModalOpen}
        okText="Book Appointment"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="profile-setting">
          <form className="row form-row">
            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  First Name <span className="text-danger">*</span>
                </label>
                <input className="text-input-field" placeholder="First Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input className="text-input-field" placeholder="Last Name" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  className="text-input-field"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Email <span className="text-danger">*</span>
                </label>
                <input className="text-input-field" placeholder="Email" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  City <span className="text-danger">*</span>
                </label>
                <input className="text-input-field" placeholder="City" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Address <span className="text-danger">*</span>
                </label>
                <input className="text-input-field" placeholder="Address" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Emergency Type <span className="text-danger">*</span>
                </label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "emergency")}
                  placeholder="Select Emergency Type"
                >
                  <Option value="emergency1">
                    Crushing chest pain, difficulty breathing
                  </Option>
                  <Option value="emergency2">
                    Sudden face drooping, difficulty speaking, weakness or
                    numbness
                  </Option>
                  <Option value="emergency3">
                    Heavy bleeding after an injury or accident
                  </Option>
                  <Option value="emergency4">
                    Poisoning, swallowing something you shouldn't have
                  </Option>
                  <Option value="emergency5">
                    Seizure, inability to stay alert and awake
                  </Option>
                  <Option value="emergency6">
                    Sudden facial, mouth, or throat swelling
                  </Option>
                </Select>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HeaderNav;
