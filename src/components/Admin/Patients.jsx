import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
// import userImg from "../../images/avatar.jpg";

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
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      <th>Last Visit</th>
                      <th>Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr key={patient.id}>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href={`profile.html?id=${patient.id}`}
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={patient.img ? patient.img : userImg}
                                alt=""
                              />
                            </a>
                            <a href={`profile.html?id=${patient.id}`}>
                              {patient.firstName} {patient.lastName}
                            </a>
                          </h2>
                        </td>
                        <td>{calculateAge(patient.dateOfBirth)}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.mobile}</td>
                        <td>{new Date(patient.createdAt).toLocaleDateString()}</td>
                        <td className="text-right">$100.00</td>
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

// Function to calculate age from date of birth
const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const ageDiff = Date.now() - dobDate.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default Patients;
