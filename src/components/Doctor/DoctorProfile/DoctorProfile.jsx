import React from "react";
import Footer from "../../Shared/Footer/Footer";
import "../../../stylesheets/doctorStylesheets/DoctorProfile.css";
import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import SubHeader from "../../Shared/SubHeader";
import { useGetDoctorQuery } from "../../../redux/api/doctorApi";
import { Empty, message } from "antd";
import { Tabs } from "antd";
import OverView from "./OverView";
import Location from "./Location";
import Review from "./Review";
import Availability from "./Availability";
import DoctorProfileView from "../SearchDoctor/DoctorProfileView";
import useAuthCheck from "../../../redux/hooks/useAuthCheck";

const DoctorProfile = () => {
  const { role } = useAuthCheck();

  const { id } = useParams();
  const { data, isLoading, isError } = useGetDoctorQuery(id);
  let content = null;
  if (!isLoading && isError)
    content = <div>{message.error("Something went Wrong!")}</div>;
  if (!isLoading && !isError && data?.id === undefined) content = <Empty />;
  if (!isLoading && !isError && data?.id)
    content = <DoctorProfileView data={data} />;

  const items = [
    {
      key: "1",
      label: "Overview",
      children: <OverView data={data} />,
    },
    {
      key: "2",
      label: "Locations",
      children: <Location data={data} />,
    },
    {
      key: "3",
      label: "Availability",
      children: <Availability />,
    },
  ];

  const authItems = [
    {
      key: "1",
      label: "Overview",
      children: <OverView data={data} />,
    },
    {
      key: "2",
      label: "Locations",
      children: <Location data={data} />,
    },
    {
      key: "3",
      label: "Reviews",
      children: <Review doctorId={id} />,
    },
    {
      key: "4",
      label: "Availability",
      children: <Availability />,
    },
  ];

  return (
    <>
      <Header />
      <SubHeader
        title="Doctor Details"
        subtitle="Know more about the doctor and their availability."
      />
      <div
        className="container"
        style={{ marginBottom: "4rem", marginTop: "6rem" }}
      >
        {content}
        <div className="p-4 rounded" style={{ marginBottom: "3rem" }}>
          <Tabs
            defaultActiveKey="1"
            items={role === "patient" ? authItems : items}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorProfile;
