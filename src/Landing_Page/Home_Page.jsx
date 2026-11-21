import React from 'react';
import './HomePage.css';
import LogoPage from '../Header_Section/logo';
import Footer from '../Fottor/fottor_section';
import PlacedStudents from '../Student_Information/Placed_Student';
import ReviewsScroll from '../Student_Information/Student_Review';
import TrainerSubjects from '../Trainer/trainer';
import BatchList from '../BatchStatus/Batchs';
import InstituteInfo from '../About_Us/About';

const LandingPage = () => {
  return (
    <div className="landing-page" id="top">
      <LogoPage />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-eyebrow">Practical learning. Real career skills.</p>
            <h1 id="hero-title">Build the skills to move your career forward.</h1>
            <p className="hero-description">
              Learn in-demand technology from experienced trainers through practical,
              hands-on learning designed to prepare you for what comes next.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#courses">Explore courses</a>
              <a className="button button-secondary" href="#contact">Talk to an advisor</a>
            </div>
            <div className="hero-highlights" aria-label="Learning highlights">
              <span>Hands-on projects</span>
              <span>Career-focused training</span>
              <span>Personal guidance</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-orbit orbit-one" />
            <div className="hero-visual-orbit orbit-two" />
            <div className="hero-visual-card">
              <span className="hero-card-icon">✦</span>
              <p>Learn by doing</p>
              <span>Skills for the real world</span>
            </div>
            <span className="hero-floating-label">Your next chapter starts here</span>
          </div>
        </section>

        <div className="componentSize">
          <section className="content-section" id="about">
            <InstituteInfo />
          </section>
          <section className="content-section" id="services">
            <TrainerSubjects />
          </section>
          <section className="content-section" id="courses">
            <BatchList />
          </section>
          <section className="content-section" id="placements">
            <PlacedStudents />
          </section>
          <section className="content-section" id="reviews">
            <ReviewsScroll />
          </section>
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
