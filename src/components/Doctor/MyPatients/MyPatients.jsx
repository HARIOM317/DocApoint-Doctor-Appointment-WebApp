import React from 'react';
import img from '../../../images/user.png';
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
            <div className="my-patient col-xl-4 col-lg-6 col-md-12 col-sm-6 col-xs-12">
              <div className="profile-card">
                <div className="image">
                  <img
                    className="profile-img"
                    alt=""
                    src={item?.img ? item?.img : img}
                  />
                </div>

                <h5>{item?.firstName + " " + item?.lastName}</h5>

                <div>
                  <p className="text-data">
                    <FaClock className="icon" />{" "}
                    {moment(item?.appointmentTime).format("MMM Do, YY")}{" "}
                  </p>

                  <p className="text-data">
                    <FaLocationArrow className="icon" /> {item?.address ? item?.address : 'N/A'}
                  </p>

                  <p className="text-data">
                    <FaEnvelope className="icon" /> {item?.email}
                  </p>
                  <p className="text-data">
                    <FaPhoneAlt className="icon" /> {item?.mobile ? item?.mobile : 'N/A'}
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