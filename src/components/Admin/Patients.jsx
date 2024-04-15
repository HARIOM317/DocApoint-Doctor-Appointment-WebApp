import React, { useState, useEffect } from "react";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import userImg from "../../images/avatar.jpg";
import "../../stylesheets/adminStylesheets/Appointments.css";


const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/patient/");
      const data = await response.json();
      setPatients(data.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="card  card-table">
            <div className="card-header table-top-heading">
              <h4 className="card-title">Patients List</h4>
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
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      <th>Last Visit</th>
                      <th>Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr
                        key={patient.id}
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
                                src={patient.img ? patient.img : userImg}
                                alt=""
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  marginRight: "10px",
                                  objectFit: "cover",
                                }}
                              />
                            </a>
                            <span className="table-data">
                              {patient.firstName} {patient.lastName}
                            </span>
                          </h2>
                        </td>
                        <td>
                          <span className="table-data">
                            {patient.dateOfBirth
                              ? calculateAge(patient.dateOfBirth)
                              : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {patient.gender ? patient.gender : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {patient.mobile ? patient.mobile : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {patient.createdAt
                              ? new Date(patient.createdAt).toLocaleDateString()
                              : "N/A"}
                          </span>
                        </td>
                        <td>
                          <span className="table-data">
                            {patient.bloodGroup ? patient.bloodGroup : "N/A"}
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
    </DashboardLayout>
  );
};

// Function to calculate age from date of birth
const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const ageDiff = Date.now() - dobDate.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default Patients;
