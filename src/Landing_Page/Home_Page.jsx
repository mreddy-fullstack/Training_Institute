import React from 'react';
import './HomePage.css';
import Logo_Page from '../Header_Section/logo';
import Footer from '../Fottor/fottor_section';
import PlacedStudents from '../Student_Information/Placed_Student';
import ReviewsScroll from '../Student_Information/Student_Review';
import TrainerSubjects from '../Trainer/trainer';
import Batch_List from '../BatchStatus/Batchs';
import InstituteInfo from '../About_Us/About';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="logo">
        <Logo_Page />
      </div>
      <div className='componentSize'>
        <InstituteInfo />
        <TrainerSubjects />
        <Batch_List />
        < PlacedStudents />
        <ReviewsScroll />
      </div>
      <div className='footer'>
        <Footer /></div>
    </div>
  );
};

export default LandingPage;
