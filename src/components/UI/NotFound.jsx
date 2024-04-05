<<<<<<< HEAD
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
        />
    )
}
export default NotFound
=======
import React from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import PageNotFound from "../../animations/page_not_found.json";
import "../../stylesheets/PageNotFound.css";

const NotFound = () => {
  return (
    <section id="not-found">
      <div className="container">
        <div className="page-not-found">
          <Lottie
            loop={true}
            animationData={PageNotFound}
            className="lottie-animation"
          />
          <h2>We are sorry, page not found!</h2>
          <p>The page you visited might have been removed or does not exist</p>
          <NavLink to="/" className={"button"}>
            Back to Homepage
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
