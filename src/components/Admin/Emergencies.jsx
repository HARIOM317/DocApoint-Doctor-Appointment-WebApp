import React, { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../utils/local-storage";
import DashboardLayout from "../Doctor/DashboardLayout/DashboardLayout";
import "../../stylesheets/adminStylesheets/Appointments.css";

const Emergencies = () => {
  const [emergency, setEmergency] = useState([]);
  const authorizationToken = getFromLocalStorage("accessToken");
  const URL = "http://localhost:5000/api/v1/emergency";

  const fetchEmergency = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {  
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      setEmergency(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching emergency:", error);
    }
  };

  useEffect(() => {
    fetchEmergency();
  }, []);
  return (
    <>
      <DashboardLayout>
        <div className="row my-3">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-header table-top-heading">
                <h4 className="card-title">Emergency</h4>
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
                        <th>Patient Phone</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Emergency Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emergency.map((emergency) => (
                        <tr key={emergency.id} className="table-row">
                          <td>
                            <span className="table-data">
                              {emergency.patientName}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">
                              {emergency.mobile}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">{emergency.city}</span>
                          </td>

                          <td>
                            <span className="table-data">
                              {emergency.address}
                            </span>
                          </td>

                          <td>
                            <span className="table-data">
                              {emergency.subject}
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
    </>
  );
};
export default Emergencies;