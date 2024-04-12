import "../../../../stylesheets/doctorStylesheets/Dashboard.css";
import { FaHospitalUser, FaCalendarAlt, FaHospital } from "react-icons/fa";
import { useGetDoctorAppointmentsQuery } from "../../../../redux/api/appointmentApi";
import { useGetDoctorPatientsQuery } from '../../../../redux/api/appointmentApi';

const DoctorDashCard = () => {

  const timestamp = Date.now();
  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);



  // const { data, isLoading, isError } = useGetDoctorPatientsQuery();
  // const totalPatient = Array.isArray(data) ? data.length : 0;

  // const { data, isError, isLoading } = useGetDoctorAppointmentsQuery({});
  //     const totalAppoint = Array.isArray(data) ? data.length : 0;

  const { data: patientData, isLoading: patientIsLoading, isError: patientIsError } = useGetDoctorPatientsQuery();
  const totalPatient = Array.isArray(patientData) ? patientData.length : 0;

  const { data: appointmentData, isError: appointmentIsError, isLoading: appointmentIsLoading } = useGetDoctorAppointmentsQuery({});
  const totalAppoint = Array.isArray(appointmentData) ? appointmentData.length : 0;



  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  const todayAppointments = Array.isArray(appointmentData)
    ? appointmentData.filter(appointment => {
      const appointmentDate = appointment.scheduleDate.split(' ')[0];
      return appointmentDate === formattedToday;
    })
    : [];


  const cardData = [
    {
      icon: <FaHospital className="icon" />,
      title: "Total Patient",
      amount: totalPatient,
      date: formattedDate,
    },
    {
      icon: <FaHospitalUser className="icon active" />,
      title: "Total Appointments",
      amount: totalAppoint,
      date: formattedDate,
    },
    {
      icon: <FaCalendarAlt className="icon danger" />,
      title: "Today Appointments",
      amount: todayAppointments.length,
      date: formattedDate,
    },
  ];
  return (
    <div className="row mb-4 p-3 rounded">
      {cardData.map((item, index) => (
        <div className="col-md-12 col-lg-4" key={index + 8}>
          <div className="d-flex gap-2 align-items-center dash-card">
            <div className="dash-card-icon">{item.icon}</div>
            <div className="dash-widget-info">
              <h6 className="mb-0">{item.title}</h6>
              <h4 className="my-1">{item.amount}</h4>
              <p className="form-text">{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DoctorDashCard;
