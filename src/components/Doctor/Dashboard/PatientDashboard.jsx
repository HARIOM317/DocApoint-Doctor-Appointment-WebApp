import React from "react";
<<<<<<< HEAD
import img from "../../../images/doc/doctor 3.jpg";
=======
import img from "../../../images/home/doctorProfile.jpg";
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
import moment from "moment";
import {
  useGetPatientAppointmentsQuery,
  useGetPatientInvoicesQuery,
} from "../../../redux/api/appointmentApi";
import { useGetPatientPrescriptionQuery } from "../../../redux/api/prescriptionApi";
import { Button, Tabs, Tag, Tooltip } from "antd";
import CustomTable from "../../UI/component/CustomTable";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { FaRegEye } from "react-icons/fa";
import { clickToCopyClipBoard } from "../../../utils/copyClipBoard";

const PatientDashboard = () => {
  const { data, isLoading: pIsLoading } = useGetPatientAppointmentsQuery();

  const { data: prescriptionData, prescriptionIsLoading } =
    useGetPatientPrescriptionQuery();

  const { data: invoices, isLoading: InvoicesIsLoading } =
    useGetPatientInvoicesQuery();

  const InvoiceColumns = [
    {
      title: "Doctor",
      key: 1,
      width: 180,
      render: function (data) {
        return (
          <div className="avatar avatar-sm mr-2 d-flex gap-2">
            <div>
              <img
                className="avatar-img rounded-circle"
                style={{ width: "30px", height: "30px" }}
                src={
                  data?.appointment?.doctor?.img
                    ? data?.appointment?.doctor?.img
                    : img
                }
                alt=""
              />
            </div>
            <div>
              <h6
                className="text-wrap mb-0"
                style={{ color: "var(--textColor)" }}
              >
                {data?.appointment?.doctor?.firstName +
                  " " +
                  data?.appointment?.doctor?.lastName}
              </h6>
              <p className="form-text" style={{ color: "var(--textColor)" }}>
                {data?.appointment?.doctor?.specialization}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Total Paid",
      key: 2,
      width: 100,
      dataIndex: "totalAmount",
    },
    {
      title: "Paid On",
      key: 3,
      width: 100,
      render: function (data) {
        return (
          <div style={{ color: "var(--textColor)" }}>
            {moment(data?.createdAt).format("LL")}
          </div>
        );
      },
    },
    {
      title: "Payment Method",
      key: 4,
      width: 100,
      dataIndex: "paymentMethod",
    },
    {
      title: "Payment Type",
      key: 4,
      width: 100,
      dataIndex: "paymentType",
    },
    {
      title: "Action",
      key: "5",
      width: 100,
      render: function (data) {
        return (
          <Link to={`/booking/invoice/${data?.appointment?.id}`}>
            <Button type="primary" size="medium">
              View
            </Button>
          </Link>
        );
      },
    },
  ];
  const prescriptionColumns = [
    {
      title: "Doctor",
      key: 11,
      width: 180,
      render: function (data) {
        return (
          <>
            <div className="avatar avatar-sm mr-2 d-flex gap-2">
              <div>
                <img
                  className="avatar-img rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                  src={data?.doctor?.img ? data?.doctor?.img : img}
                  alt=""
                />
              </div>
              <div>
                <h6
                  className="text-wrap mb-0"
                  style={{ color: "var(--textColor)" }}
                >
                  {data?.doctor?.firstName + " " + data?.doctor?.lastName}
                </h6>
                <p className="form-text" style={{ color: "var(--textColor)" }}>
                  {data?.doctor?.specialization}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "Appointment Id",
      dataIndex: "appointment",
      key: 1,
      render: ({ trackingId }) => {
        return (
          <Tooltip title="Copy Tracking Id">
            <h6>
              <Tag
                color="#87d068"
                className="text-uppercase "
                style={{
                  cursor: "pointer",
                  padding: "4px 8px",
                  border: "1.5px solid #649c4e",
                }}
                onClick={() => clickToCopyClipBoard(trackingId)}
              >
                {trackingId}
              </Tag>
            </h6>
          </Tooltip>
        );
      },
    },

    {
      title: "Appointment Date",
      key: 12,
      render: function (data) {
        return (
          <div style={{ color: "var(--textColor)" }}>
            {moment(data?.appointment?.scheduleDate).format("LL")}{" "}
            <span
              className="d-block"
              style={{ color: "var(--headingColor)", fontWeight: "500" }}
            >
              {data?.appointment?.scheduleTime}
            </span>
          </div>
        );
      },
    },
    {
      title: "Follow-Update",
      dataIndex: "followUpdate",
      key: 4,
      render: function (data) {
        return (
          <Tag
            color="#c9fbc1"
            style={{
              color: "var(--textColor)",
              border: "1.5px solid #a0c799",
              fontWeight: "500",
              textTransform: "capitalize",
              padding: "4px 8px",
            }}
          >
            {dayjs(data).format("MMM D, YYYY hh:mm A")}
          </Tag>
        );
      },
    },
    {
      title: "Archived",
      dataIndex: "isArchived",
      key: 4,
      render: function ({ isArchived }) {
        return (
          <Tag
            color={isArchived ? "#ffc9af" : "#b4d2e9"}
            style={{
              color: "var(--textColor)",
              border: "1.5px solid",
              borderColor: isArchived ? "#cca08c" : "#8ca4b5",
              fontWeight: "500",
              textTransform: "capitalize",
              padding: "4px 8px",
            }}
          >
            {isArchived ? "Yes" : "Under Treatment"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: 13,
      width: 100,
      render: function (data) {
        return (
          <div className="d-flex">
            <Link to={`/dashboard/prescription/${data.id}`}>
              <Button
                type="primary"
                size="small"
                className="d-flex align-items-center justify-content-center"
                style={{
                  padding: "8px",
                  textAlign: "center",
                  width: "30px",
                  height: "30px",
                }}
              >
                <FaRegEye />
              </Button>
            </Link>
            {/* <Link to={`/dashboard/appointment/treatment/edit/${data.id}`}>
              <Button type='primary' size='small' className="bg-primary" style={{ margin: "5px 5px" }}>
                <FaEdit />
              </Button>
            </Link> */}
            {/* <Button onClick={() => deleteHandler(data.id)} size='small' type='primary' style={{ margin: "5px 5px" }} danger>
              <FaRegTimesCircle />
            </Button> */}
          </div>
        );
      },
    },
  ];
  const appointmentColumns = [
    {
      title: "Doctor",
      key: 20,
      width: 180,
      render: function (data) {
        return (
          <>
            <div className="avatar avatar-sm mr-2 d-flex gap-2">
              <div>
                <img
                  className="avatar-img rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                  src={data?.doctor?.img ? data?.doctor?.img : img}
                  alt=""
                />
              </div>
              <div>
                <h6
                  className="text-wrap mb-0"
                  style={{ color: "var(--textColor)" }}
                >
                  {data?.doctor?.firstName + " " + data?.doctor?.lastName}
                </h6>
                <p className="form-text" style={{ color: "var(--textColor)" }}>
                  {data?.doctor?.specialization}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "App Date",
      key: 22,
      width: 100,
      render: function (data) {
        return (
          <div style={{ color: "var(--textColor)" }}>
            {moment(data?.scheduleDate).format("LL")}{" "}
<<<<<<< HEAD
            <span className="d-block text-info">{data?.scheduleTime}</span>
=======
            <span className="d-block ">{data?.scheduleTime}</span>
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
          </div>
        );
      },
    },
    {
      title: "Booking Date",
      key: 22,
      width: 100,
      render: function (data) {
        return (
          <div style={{ color: "var(--textColor)" }}>
            {moment(data?.createdAt).format("LL")}
          </div>
        );
      },
    },
    {
      title: "Status",
      key: 24,
      width: 100,
      render: function (data) {
        return (
          <Tag
            color="#ffcacb"
            style={{
              border: "1.5px solid #cc9b9c",
              fontWeight: "500",
              textTransform: "capitalize",
              padding: "4px 8px",
              color: "var(--textColor)",
              width: "100px",
              textAlign: "center",
            }}
          >
            {data?.status}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: 25,
      width: 100,
      render: function (data) {
        return (
          <Link to={`/dashboard/appointments/${data.id}`}>
            <Button type="primary">View</Button>
          </Link>
        );
      },
    },
  ];

  const items = [
    {
      key: "1",
      label: "Appointment",
      children: (
        <CustomTable
          loading={pIsLoading}
          columns={appointmentColumns}
          dataSource={data}
          showPagination={true}
          pageSize={10}
          showSizeChanger={true}
        />
      ),
    },
    {
      key: "2",
      label: "Prescription",
      children: (
        <CustomTable
          loading={prescriptionIsLoading}
          columns={prescriptionColumns}
          dataSource={prescriptionData}
          showPagination={true}
          pageSize={10}
          showSizeChanger={true}
        />
      ),
    },
    {
      key: "3",
      label: "Billing",
      children: (
        <CustomTable
          loading={InvoicesIsLoading}
          columns={InvoiceColumns}
          dataSource={invoices}
          showPagination={true}
          pageSize={10}
          showSizeChanger={true}
        />
      ),
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};
export default PatientDashboard;
