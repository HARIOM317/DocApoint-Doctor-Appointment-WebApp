import React from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import { useGetDoctorPatientsHistoryQuery } from '../../../redux/api/appointmentApi';

const PatientMedicalHistory = () => {
  const { data, isLoading, isError } = useGetDoctorPatientsHistoryQuery();
  console.log({data});
  return (
    <DashboardLayout>
      <div>Patient Medical History</div>
    </DashboardLayout>
  );
};

export default PatientMedicalHistory;
