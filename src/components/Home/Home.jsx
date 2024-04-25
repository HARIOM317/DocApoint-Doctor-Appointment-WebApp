import React from "react";
import Footer from "../Shared/Footer/Footer";
import Testimonial from "./Testimonial";
import ClinicAndSpecialities from "./ClinicAndSpecialities";
import BookDoctor from "./BookDoctor";
import Availabe from "./Available";
import InfoPage from "./InfoPage";
import Header from "../Shared/Header/Header";
import Service from "./Service";
import Gallery from "./Gallery";
import OurDoctors from "./OurDoctors";
import HomePageHeader from "./HomePageHeader";
import HowToUse from "./HowToUse";
import FAQs from "./FAQs";
import useAuthCheck from "../../redux/hooks/useAuthCheck";
import Chatbot from "./Chatbot";

const Home = () => {
  const { role } = useAuthCheck();

  return (
    <>
      <Header />
      <HomePageHeader />
      <InfoPage />
      <Service />
      <HowToUse />
      <ClinicAndSpecialities />
      {role === "patient" && <BookDoctor />}
      <Availabe />
      <OurDoctors />
      <Gallery />
      <Testimonial />
      <FAQs />
      {/* <Chatbot /> */}
      <Footer />
    </>
  );
};

export default Home;
