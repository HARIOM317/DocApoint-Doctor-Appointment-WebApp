import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../images/logo.png";
import userImg from "../../images/avatar.jpg";
import useAuthCheck from "../../redux/hooks/useAuthCheck";
import "../../stylesheets/UIStylesheets/AdminHeader.css";
import { NavLink } from "react-router-dom";
import { message } from "antd";

const AdminHeader = () => {
  const { data } = useAuthCheck();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Successfully Logged Out");
    window.location.href = "/";
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">My Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3" onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );


  return (
    <div className="header">
      <div className="header-left">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      {/* <a id="toggle_btn">
        <BarsOutlined />
      </a> */}

      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <SearchOutlined />
          </button>
        </form>
      </div>

      <ul className="nav user-menu">
        {/* <li className="nav-item dropdown noti-dropdown">
                      <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                          <BellOutlined /> <span className="badge badge-pill">3</span>
                      </a>
                      <div className="dropdown-menu notifications">
                      </div>
                  </li> */}
        <li className="nav-item dropdown has-arrow me-4">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <Avatar src={userImg} size={31} alt="" />
                {data && data.user && data.user.firstName}
              </span>
            </a>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;
