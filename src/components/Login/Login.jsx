import React, { useState } from "react";
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
                <h3>Already a Member?</h3>
                <p>
                 I have already an account
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
                style={{ width: "75%" }}
              />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>New Member?</h3>
                <p>
                  I don't have an account
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
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
