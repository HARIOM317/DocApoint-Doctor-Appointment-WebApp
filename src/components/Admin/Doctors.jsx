import React from "react";
import AdminLayout from "./AdminLayout";
import userImg from "../../images/avatar.jpg";
import "../../stylesheets/adminStylesheets/Doctors.css";

const Doctors = () => {
  return (
    <>
      <AdminLayout>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Doctors List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Earned</th>
                        <th>Reviews</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img rounded-circle"
                                src={userImg}
                                alt=""
                              />
                            </a>
                            <a>Dr. Ruby Perrin</a>
                          </h2>
                        </td>
                        <td>Dental</td>
                        <td>$3200.00</td>
                        <td>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star text-warning"></i>
                          <i className="fe fe-star-o text-secondary"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default Doctors;
