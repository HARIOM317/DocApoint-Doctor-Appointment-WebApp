import React, { useState, useEffect } from "react";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import "../../stylesheets/adminStylesheets/Appointments.css";

const Ambulance = () => {
  const [ambulance, setAmbulance] = useState([]);
  const URL = "http://localhost:5000/api/v1/ambulance";

  const fetchAmbulance = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setAmbulance(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching ambulance:", error);
    }
  };

  useEffect(() => {
    fetchAmbulance();
  }, []);
  return (
    <>
      <DashboardLayout>
        <div className="row my-3">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-header table-top-heading">
                <h4 className="card-title">Ambulance</h4>
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
                        <th>Driver Name</th>
                        <th>Ambulance Number</th>
                        <th>Driver Phone</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ambulance.map((ambulance) => (
                        <tr key={ambulance.id} className="table-row">
                          <td>
                            <span className="table-data">
                              {ambulance.driverName}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">
                              {ambulance.ambulanceNumber}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">
                              {ambulance.mobile}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">{ambulance.city}</span>
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
    </>
  );
};
export default Ambulance;
