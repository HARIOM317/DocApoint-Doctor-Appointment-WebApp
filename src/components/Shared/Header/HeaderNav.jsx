import { Popover } from "antd";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Drawer, Button } from "antd";
<<<<<<< HEAD
=======
import useAuthCheck from "../../../redux/hooks/useAuthCheck";
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
import {
  FaHome,
  FaPhoneAlt,
  FaWrench,
  FaUserMd,
  FaAddressBook,
  FaBloggerB,
  FaSignInAlt,
} from "react-icons/fa";

const HeaderNav = ({ open, setOpen, isLoggedIn, data, avatar, content }) => {
<<<<<<< HEAD
=======
  const { role } = useAuthCheck();

>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
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
                  src={data?.img ? data?.img : avatar}
                  alt=""
                  className="profileImage shadow img-fluid"
                />
              </div>
            </Popover>
          </div>
        )}
        <FaBars className="mobile-nav-toggle" onClick={showDrawer} />
      </nav>
      <Drawer
        placement={"right"}
        width={500}
        onClose={onClose}
        open={open}
        size={"default"}
        extra={
<<<<<<< HEAD
          <Button type="primary" onClick={onClose} style={{background: 'var(--primaryColor)', fontWeight: 'bold', color: 'white'}}>
=======
          <Button
            type="primary"
            onClick={onClose}
            style={{
              background: "var(--primaryColor)",
              fontWeight: "bold",
              color: "white",
            }}
          >
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
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
    </>
  );
};

export default HeaderNav;
