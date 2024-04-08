import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import userImg from "../../images/avatar.jpg";
import "../../stylesheets/adminStylesheets/Appointments.css";


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/doctor/");
      const data = await response.json();
      setDoctors(data.data.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <div className="card-header table-top-heading">
              <h4 className="card-title">Doctors List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1.5px solid var(--borderColor)",
                      }}
                    >
                      <th>Doctor</th>
                      <th>Specialization</th>
                      <th>Clinic Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor) => (
                      <tr
                        key={doctor.id}
                        style={{
                          borderBottom: "1px solid var(--borderColor)",
                          lineHeight: "3.5rem",
                        }}
                      >
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-sm mr-2">
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor.img ? doctor.img : userImg}
                                alt=""
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  marginRight: "10px",
                                }}
                              />
                            </a>
                            <span className="table-data">
                              {doctor.firstName} {doctor.lastName}
                            </span>
                          </h2>
                        </td>
                        <td>
                          <span className="table-data">
                            {doctor.specialization
                              ? doctor.specialization
                              : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {doctor.clinicName ? doctor.clinicName : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {doctor.city ? doctor.city : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {doctor.state ? doctor.state : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            ₹{doctor.price ? doctor.price : "N/A"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Doctors;
