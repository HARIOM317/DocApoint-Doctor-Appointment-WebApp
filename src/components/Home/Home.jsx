<<<<<<< HEAD
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Testimonial from './Testimonial';
import ClinicAndSpecialities from './ClinicAndSpecialities';
import BookDoctor from './BookDoctor';
import Availabe from './Available';
import InfoPage from './InfoPage';
import Header from '../Shared/Header/Header';
import Service from './Service';
import Gallery from './Gallery';
import OurDoctors from './OurDoctors';
import HomePageHeader from './HomePageHeader';
import HowToUse from './HowToUse';
import FAQs from './FAQs';

const Home = () => {
    return (
        <>
            <Header />
            <HomePageHeader />
            <InfoPage />
            <Service />
            <HowToUse />
            <ClinicAndSpecialities />
            <BookDoctor />
            <Availabe />
            <OurDoctors/>
            <Gallery/>
            <Testimonial />
            <FAQs />
            <Footer />
        </>
    );
};

export default Home;
=======
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
      <Footer />
    </>
  );
};

export default Home;
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
