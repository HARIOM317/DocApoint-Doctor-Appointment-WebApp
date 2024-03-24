import React, { useState } from "react";
import SignInImg from "../../images/doc/info.svg";
import SignUpImg from "../../images/doc/register.svg";

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
          className={`login-container ${isSignUp ? "sign-up-mode" : ""} ${isSignUpMobile ? "sign-up-mode2" : ""}`}
        >
          <div className="signIn-signUp">
            {/* Sign In Form */}

            <form action="" className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>

              <input type="submit" value="Login" className="btn" />

              <p className="social-text">Or Sign in with social platforms</p>

              <div className="social-media">
                <a href="" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>

              <p className="account-text">
                Don't have an account?{" "}
                <a href="" id="sign-up-btn2" onClick={handleSignUpMobileClick}>
                  Sign Up
                </a>
              </p>
            </form>

            {/* Sign Up Form */}
            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>

              <input type="submit" value="Sign Up" className="btn" />

              <p className="social-text">Or Sign in with social platforms</p>

              <div className="social-media">
                <a href="" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <p className="account-text">
                Already have an account?{" "}
                <a href="" id="sign-in-btn2" onClick={handleSignInMobileClick}>
                  Sign In
                </a>
              </p>
            </form>
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
                  className="btn"
                  id="sign-in-btn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>

              <img src={SignInImg} alt="" className="image" />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>New to Brand?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum ratione placeat voluptas non incidunt debitis!
                </p>
                <button
                  className="btn"
                  id="sign-up-btn"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>

              <img src={SignUpImg} alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
