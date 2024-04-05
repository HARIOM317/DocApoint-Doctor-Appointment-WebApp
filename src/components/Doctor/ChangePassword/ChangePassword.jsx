import React from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import { Button } from "antd";

const ChangePassword = () => {
  return (
    <DashboardLayout>
<<<<<<< HEAD
      <div className="w-100 mb-3 rounded p-2" style={{ background: "#f8f9fa" }}>
=======
      <div className="w-100 mb-3 rounded p-2">
<<<<<<< HEAD
        {/* <h5 className="text-title mt-3">Change Your Password</h5> */}
        <div className="text-center mb-5">
          <div className="section-title mb-3">
            <h2>Change Your Password</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
=======
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
        <h5 className="text-title mt-3">Change Your Password</h5>
>>>>>>> e8d1e340453beb95f90cede31e03c88fb4a1a855
        <form className="container row form-row px-5 mx-auto my-5">
          <div className="col-md-12">
            <div className="form-group mb-3">
              <input
                type="password"
                placeholder="Old Password"
                className="text-form-input-field"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-3">
              <input
                type="password"
                placeholder="New Password"
                className="text-form-input-field"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-2 ">
              <input
                type="password"
                placeholder="Confirm Password"
                className="text-form-input-field"
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <Button htmlType="submit" type="primary" size="large">
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ChangePassword;
