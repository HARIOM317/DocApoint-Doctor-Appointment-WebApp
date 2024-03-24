import React, { useState } from "react";
import SignInImg from "../../images/doc/info.svg";
import SignUpImg from "../../images/doc/register.svg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../stylesheets/Login.css";
import Lottie from "lottie-react";
import SignInAnimation from "../../animations/sign-in.json";
import SignUpAnimation from "../../animations/sign-up.json";


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignUpMobile, setIsSignUpMobile] = useState(false);

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInMobileClick = (event) => {
    event.preventDefault();
    setIsSignUpMobile(false);
  };

  const handleSignUpMobileClick = (event) => {
    event.preventDefault();
    setIsSignUpMobile(true);
  };

  return (
    <>
      <div className="login-form">
        <div
          className={`login-container ${isSignUp ? "sign-up-mode" : ""} ${
            isSignUpMobile ? "sign-up-mode2" : ""
          }`}
        >
          <Link to="/">
            <span className="pageCloseBtn">
              <FaTimes />
            </span>
          </Link>

          <div className="signIn-signUp">
            {/* Sign In Form */}
            <SignIn handleSignUpMobileClick={handleSignUpMobileClick} />

            {/* Sign Up Form */}
            <SignUp handleSignInMobileClick={handleSignInMobileClick} />
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Member of Brand?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum ratione placeat voluptas non incidunt debitis!
                </p>
                <button
                  className="btn-light"
                  id="sign-in-btn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>

              <Lottie
                loop={true}
                animationData={SignUpAnimation}
                className="image"
              />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>New to Brand?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum ratione placeat voluptas non incidunt debitis!
                </p>
                <button
                  className="btn-light"
                  id="sign-up-btn"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>

              <Lottie
                loop={true}
                animationData={SignInAnimation}
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
