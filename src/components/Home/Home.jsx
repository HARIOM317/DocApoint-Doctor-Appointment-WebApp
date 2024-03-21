import React from 'react';
import Blog from './Blog';
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
            <Blog />
            <Availabe />
            <OurDoctors/>
            <Testimonial />
            <Gallery/>
            <Footer />
        </>
    );
};

export default Home;