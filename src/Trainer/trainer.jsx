import React, { useState, useEffect, useRef } from 'react';
import './TrainerSubjects.css';

const TrainerSubjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State to track if component is in view
  const containerRef = useRef(null); // Ref for intersection observer

  const subjects = [
    {
      layer: 'Python',
      topics: ['Basics', 'Data Types', 'OOP Concepts', 'Libraries', 'Frameworks', 'Error Handling', 'File Handling']
    },
    {
      layer: 'Big Data',
      topics: ['Hadoop', 'Spark', 'Data Processing', 'Data Storage', 'Analysis Tools', 'Data Visualization', 'Data Modeling']
    },
    {
      layer: 'Cloud',
      topics: ['AWS', 'Azure', 'GCP', 'Cloud Storage', 'Virtual Machines', 'Kubernetes', 'Serverless Architecture']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % subjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + subjects.length) % subjects.length);
  };

  // Set up intersection observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Trigger animation when component is in view
      },
      { threshold: 0.5 }
    );
    observer.observe(container);
    return () => {
      observer.unobserve(container);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % subjects.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, subjects.length]);

  return (
    <div
      className={`trainer-container ${isVisible ? 'slide-in' : ''}`}
      ref={containerRef} // Attach ref to container for observing visibility
    >
      <div className={`trainer-image ${isVisible ? 'slide-in-left' : ''}`}>
        <img src="https://www.teacherstrainingmumbai.com/images/pic_4.jpg" alt="Trainer" />
      </div>

      {/* Carousel for Subjects */}
      <div className="carousel-container">
        <div
          className="carousel-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {subjects.map((subject, index) => (
            <div
              className={`carousel-slide ${isVisible ? 'slide-in-right' : ''}`}
              key={index}
            >
              <h2>{subject.layer} Topics</h2>
              <ul>
                {subject.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="nav-button left" onClick={prevSlide}>&lt;</button>
        <button className="nav-button right" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default TrainerSubjects;
