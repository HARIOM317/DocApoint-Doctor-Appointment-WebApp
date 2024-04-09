import React, { useState } from "react";
import { Popover } from "antd";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Drawer, Button, Modal } from "antd";
import { useForm } from "react-hook-form";
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
  FaBroadcastTower,
} from "react-icons/fa";
import "../../../stylesheets/doctorStylesheets/ProfileSetting.css";

const HeaderNav = ({ open, setOpen, isLoggedIn, data, avatar, content }) => {
  const URL = "http://localhost:5000/api/v1/ambulance";
  const { register, handleSubmit } = useForm({});
  const { role } = useAuthCheck();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectValue, setSelectValue] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const obj = data;
    const newObj = { ...obj, ...selectValue };
    const formData = new FormData();
    // selectedImage && formData.append("file", file);
    const changedValue = Object.fromEntries(
      Object.entries(newObj).filter(([key, value]) => value !== "")
    );
    const changeData = JSON.stringify(changedValue);
    formData.append("data", changeData);

    console.log("Changed Data: " + formData.get("data"));
    try {
      setIsLoading(true);
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: changeData,
      });
      const data = await response.json();
      //if response is ok then set success to true
      if (response.ok) {
        setIsLoading(false);
        // clear the fields after success
        window.location.reload();
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error while adding setting appointment:", error);
    }
  };

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
        onOk={handleSubmit(onSubmit)}
        onCancel={handleCancel}
      >
        <div className="profile-setting">
          <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Patient Name <span className="text-danger">*</span>
                </label>
                <input
                  className="text-input-field"
                  {...register("patientName")}
                  placeholder="Patient Name"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  className="text-input-field"
                  placeholder="Phone Number"
                  {...register("mobile")}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  City <span className="text-danger">*</span>
                </label>
                <input
                  className="text-input-field"
                  placeholder="City"
                  {...register("city")}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  className="text-input-field"
                  placeholder="Address"
                  {...register("address")}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Emergency Type <span className="text-danger">*</span>
                </label>
                {/* <Select
                  defaultValue={"other"}
                  className="dropdown"
                  onChange={(value) => handleChange(value, "subject")}
                  placeholder="Select Emergency"
                  style={{ marginTop: "15px" }}
                > */}
                <Select
                  defaultValue={"Emergency"}
                  className="dropdown"
                  onChange={(value) => handleChange(value, "subject")}
                  placeholder="Select Emergency"
                  style={{ marginTop: "15px" }}
                >
                  <Option value="Cardiologist">
                    Crushing chest pain, difficulty breathing
                  </Option>
                  <Option value="Neurologist">
                    Sudden face drooping, difficulty speaking, weakness or
                    numbness
                  </Option>
                  <Option value="General Surgeon">
                    Heavy bleeding after an injury or accident
                  </Option>
                  <Option value="Toxicologist">
                    Poisoning, swallowing something you shouldn't have
                  </Option>
                  <Option value=" Emergency Medicine Physician.">
                    Seizure, inability to stay alert and awake
                  </Option>
                  <Option value="Allergist">
                    Sudden facial, mouth, or throat swelling
                  </Option>
                </Select>
              </div>
            </div>
            {/* <div className="text-center my-3">
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                loading={isLoading}
                disabled={isLoading ? true : false}
              >
                {isLoading
                  ? "finding available ambulances ..."
                  : "Emergency Booking"}
              </Button>
            </div> */}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HeaderNav;
