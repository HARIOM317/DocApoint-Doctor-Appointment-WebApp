import React from 'react';
import img from '../../../images/doc/doctor 3.jpg';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { useGetDoctorPatientsQuery } from '../../../redux/api/appointmentApi';
import moment from 'moment';
import { FaClock, FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Empty } from 'antd';
import "../../../stylesheets/doctorStylesheets/MyPatient.css";

const MyPatients = () => {
  const { data, isLoading, isError } = useGetDoctorPatientsQuery();
  let content = null;
  if (!isLoading && isError) content = <div>Something Went Wrong !</div>;
  if (!isLoading && !isError && data?.length === 0) content = <Empty />;
  if (!isLoading && !isError && data?.length > 0)
    content = (
      <>
        {data &&
          data?.map((item) => (
            <div className="my-patient col-md-4 col-sm-12">
              <div className="flexColCenter profile-card">
                <div className="image">
                  <img
                    className="profile-img"
                    alt=""
                    src={item?.img ? item?.img : img}
                  />
                </div>

                <div>
                  <p className="text-data">
                    <FaClock className="icon" />{" "}
                    {moment(item?.appointmentTime).format("MMM Do, YY")}{" "}
                  </p>

                  <p className="text-data">
                    <FaLocationArrow className="icon" /> {item?.address}
                  </p>

                  <p className="text-data">
                    <FaEnvelope className="icon" /> {item?.email}
                  </p>
                  <p className="text-data">
                    <FaPhoneAlt className="icon" /> {item?.mobile}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  return (
    <DashboardLayout>
      <div className="row">
        {content}
      </div>
    </DashboardLayout>
  );
};

export default MyPatients;