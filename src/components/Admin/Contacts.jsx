import React, { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { getFromLocalStorage } from "../../utils/local-storage";
import { FaTrash } from "react-icons/fa";
import { message } from "antd";

const AdminContacts = () => {
    const [reviews, setReviews] = useState([]);
    const authorizationToken = getFromLocalStorage("accessToken");
    const URL = `http://localhost:5000/api/v1/contact/`;

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
            console.error("Error fetching contacts:", error);
        }
    };

    const deleteReview = async (id) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.ok) {
                // Remove the deleted review from the state
                setReviews(reviews.filter((review) => review.id !== id));
                message.success("Contact deleted successfully");
            } else {
                message.error("Error deleting contact: " + response.status);
            }
        } catch (error) {
            message.error("Error deleting contact: " + error.message);
        }
    };

    return (
        <AdminLayout>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-table flex-fill">
                        <div className="card-header">
                            <h4 className="card-title">Contacts</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Subject</th>
                                            <th>Text</th>
                                            <th>Action</th> {/* Add a new table header for the delete icon */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reviews.map((review) => (
                                            <tr key={review.id}>
                                                <td>{review.email}</td>
                                                <td>{review.firstName}</td>
                                                <td>{review.lastName}</td>
                                                <td>{review.subject}</td>
                                                <td>{review.text}</td>
                                                <td>
                                                    {/* Add a delete icon and attach the deleteReview function */}
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => deleteReview(review.id)}
                                                    >
                                                        <FaTrash />
                                                    </button>
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

export default AdminContacts;