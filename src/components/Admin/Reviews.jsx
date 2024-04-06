import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import userImg from "../../images/avatar.jpg";
import { Rate } from "antd";
import { getFromLocalStorage } from "../../utils/local-storage";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const authorizationToken = getFromLocalStorage("accessToken");
  const URL = `http://localhost:5000/api/v1/review/admin/reviews/`;

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setReviews(data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Reviews</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor</th>
                      <th>Patient</th>
                      <th>Description</th>
                      <th>Recommended</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review) => (
                      <tr key={review.id}>
                        <td>
                          {review.doctor && (
                            <div className="d-flex align-items-center">
                              <img
                                className="avatar-img rounded-circle mr-2"
                                src={
                                  review.doctor.img
                                    ? review.doctor.img
                                    : userImg
                                }
                                alt=""
                              />
                              <div>
                                {review.doctor.firstName}{" "}
                                {review.doctor.lastName}
                              </div>
                            </div>
                          )}
                        </td>
                        <td>
                          {review.patient && (
                            <div className="d-flex align-items-center">
                              <img
                                className="avatar-img rounded-circle mr-2"
                                src={
                                  review.patient.img
                                    ? review.patient.img
                                    : userImg
                                }
                                alt=""
                              />
                              <div>
                                {review.patient.firstName}{" "}
                                {review.patient.lastName}
                              </div>
                            </div>
                          )}
                        </td>
                        <td>{review.description}</td>
                        <td>{review.isRecommended ? "Yes" : "No"}</td>
                        <td>
                        <Rate disabled defaultValue={parseInt(review.star)} />
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

export default Reviews;
