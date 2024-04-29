import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DoctorBooking from "./components/Booking/DoctorBooking";
import BookingSuccess from "./components/Booking/BookingSuccess";
import BookingInvoice from "./components/Booking/BookingInvoice";
import DoctorProfile from "./components/Doctor/DoctorProfile/DoctorProfile";
import Appointments from "./components/Doctor/Appointments/Appointments";
import MyPatients from "./components/Doctor/MyPatients/MyPatients";
import Reviews from "./components/Doctor/Reviews/Reviews";
import Schedule from "./components/Doctor/Schedule/Schedule";
import ProfileSetting from "./components/Doctor/ProfileSetting/ProfileSetting";
import ChangePassword from "./components/Doctor/ChangePassword/ChangePassword";
import HealthHome from "./components/health/health_home";

// Admin Components
import AdminDashboard from "./components/Admin/Dashboard";
import Emergencies from "./components/Admin/Emergencies";
import Ambulance from "./components/Admin/Ambulance";
import AdminAppointments from "./components/Admin/Appointments";
import Doctors from "./components/Admin/Doctors";
import Patients from "./components/Admin/Patients";
import AdminPrescription from "./components/Admin/adminPrescription";
import AdminBlogs from "./components/Admin/AdminBlog";
import AdminReviews from "./components/Admin/Reviews";
import AddNewDoctor from "./components/Admin/AddDoctor";
import AdminContacts from "./components/Admin/Contacts";

import PatientFavouriteDoctor from "./components/Doctor/PatientFavourite/PatientFavourite";
import DoctorInvoice from "./components/Doctor/Invoice/DoctorInvoice";
import SearchDoctor from "./components/Doctor/SearchDoctor/SearchDoctor";
import Blogs from "./components/Doctor/Blogs/Blogs";
import BlogsEdit from "./components/Doctor/Blogs/BlogsEdit";
import AddBlog from "./components/Doctor/Blogs/AddBlog";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
// import AppointmentPage from "./components/Appointment/AppointmentPage";
import TrackAppointment from "./components/TrackAppointment/TrackAppointment";
import Treatment from "./components/Doctor/Treatment/Treatment";
import Prescription from "./components/Doctor/Prescription/Prescription";
import PrescriptionView from "./components/Doctor/Prescription/PrescriptionView";
import TreatmentEdit from "./components/Doctor/Treatment/TreatmentEdit";
import ViewAppointment from "./components/Doctor/Appointments/ViewAppointment";
import ForgotPassword from "./components/Login/ForgotPassword";
import Dashboard from "./components/Doctor/Dashboard/Dashboard";
import PrivateOutlet from "./components/Shared/PrivateOutlet";
import NotFound from "./components/UI/NotFound";
import Login from "./components/Login/Login";


// Exercises
import Exercises from "./components/health/Exercises";
import AbsExercises from "./components/health/exercises_components/AbsExercise";
import BackExercises from "./components/health/exercises_components/BackExercise";
import BicepExercises from "./components/health/exercises_components/BicepExercise";
import CardioExercises from "./components/health/exercises_components/CardioExercise";
import ChestExercises from "./components/health/exercises_components/ChestExercise";
import ForearmsExercises from "./components/health/exercises_components/ForearmsExercise";
import LegExercises from "./components/health/exercises_components/LegExercise";
import ShoulderExercises from "./components/health/exercises_components/ShoulderExercise";
import TricepExercises from "./components/health/exercises_components/TricepExercise";

// Diets
import Diets from "./components/health/Diets";
import WeightLossDiets from "./components/health/diets_components/WeightLossDiets";
import WeightGainDiets from "./components/health/diets_components/WeightGainDiets";

// import HealthDashboard from "./components/health/HealthDashboard";
import TestSymptoms from "./components/health/TestSymptoms";

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Routs */}
        <Route element={<PrivateOutlet />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health" element={<HealthHome />} />
          <Route path="/dashboard/appointments" element={<Appointments />} />

          <Route
            path="/dashboard/appointments/:id"
            element={<ViewAppointment />}
          />
          <Route
            path="/dashboard/appointment/treatment/:id"
            element={<Treatment />}
          />
          <Route
            path="/dashboard/appointment/treatment/edit/:id"
            element={<TreatmentEdit />}
          />
          <Route path="/dashboard/my-patients" element={<MyPatients />} />
          <Route path="/dashboard/prescription" element={<Prescription />} />
          <Route
            path="/dashboard/prescription/:id"
            element={<PrescriptionView />}
          />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/invoices" element={<DoctorInvoice />} />
          <Route path="/dashboard/reviews" element={<Reviews />} />
          <Route
            path="/dashboard/profile-setting"
            element={<ProfileSetting />}
          />
          <Route path="/dashboard/blogs" element={<Blogs />} />
          <Route path="/dashboard/blogs/:id" element={<BlogsEdit />} />
          <Route path="/dashboard/blogs/create" element={<AddBlog />} />
          <Route
            path="/dashboard/change-password"
            element={<ChangePassword />}
          />

          {/* For Patient dashboard */}
          <Route
            path="/dashboard/favourite"
            element={<PatientFavouriteDoctor />}
          />

          {/* Exercises */}
          <Route path="/health/exercise" element={<Exercises />} />
          <Route path="/health/exercise/abs" element={<AbsExercises />} />
          <Route path="/health/exercise/back" element={<BackExercises />} />
          <Route path="/health/exercise/biceps" element={<BicepExercises />} />
          <Route path="/health/exercise/cardio" element={<CardioExercises />} />
          <Route path="/health/exercise/chest" element={<ChestExercises />} />
          <Route
            path="/health/exercise/forearms"
            element={<ForearmsExercises />}
          />
          <Route path="/health/exercise/legs" element={<LegExercises />} />
          <Route
            path="/health/exercise/shoulder"
            element={<ShoulderExercises />}
          />
          <Route
            path="/health/exercise/triceps"
            element={<TricepExercises />}
          />

          {/* Diets */}
          <Route path="/health/diets" element={<Diets />} />
          <Route
            path="/health/diets/weight-loss"
            element={<WeightLossDiets />}
          />
          <Route
            path="/health/diets/weight-gain"
            element={<WeightGainDiets />}
          />

          {/* <Route
            path="/health/health-dashboard"
            element={<HealthDashboard />}
          /> */}

          <Route
            path="/health/test-health-by-symptoms"
            element={<TestSymptoms />}
          />
        </Route>

        {/* Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/doctors" element={<SearchDoctor />} />
        <Route path="/doctors/profile/:id" element={<DoctorProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/track-appointment" element={<TrackAppointment />} />
        <Route
          path="/reset-password/:userId/:uniqueString"
          element={<ForgotPassword />}
        />
        {/* <Route path="/appointment" element={<AppointmentPage />} /> */}

        <Route path="/booking/:doctorId" element={<DoctorBooking />} />
        <Route path="/booking/success/:id" element={<BookingSuccess />} />
        <Route path="/booking/invoice/:id" element={<BookingInvoice />} />

        {/* Admin Dashboard  */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/emergency" element={<Emergencies />} />
        <Route path="/admin/ambulance" element={<Ambulance />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/doctors" element={<Doctors />} />
        <Route path="/admin/addDoctor" element={<AddNewDoctor />} />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin/prescription" element={<AdminPrescription />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        <Route path="/admin/contact" element={<AdminContacts />} />

        {/* Error 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
