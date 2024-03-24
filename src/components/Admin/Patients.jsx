import React from "react";
import AdminLayout from "./AdminLayout";
import userImg from "../../images/avatar.jpg";
import "../../stylesheets/adminStylesheets/Patients.css";

const Patients = () => {
  return (
    <>
      <AdminLayout>
        <div className="row">
          <div className="col-md-12">
            <div className="card  card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Patients List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Phone</th>
                        <th>Last Visit</th>
                        <th>Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={userImg}
                                alt=""
                              />
                            </a>
                            <a href="profile.html">Charlene Reed </a>
                          </h2>
                        </td>
                        <td>8286329170</td>
                        <td>20 Oct 2019</td>
                        <td className="text-right">$100.00</td>
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
export default Patients;
