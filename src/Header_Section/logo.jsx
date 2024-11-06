import React from 'react';
import logo from '../Institute_releated_Images/institute_logo.jpeg';
import './logo_page.css';

const Logo_Page = () => {
    return (
        <div className="container">
            <div id='App-logo'>
                <img src={logo} className="App-logo" alt="Institute Logo" />
            </div>
            <div className="buttons">
                <a href="#about"><button>About Us</button></a>
                <a href="#contact"><button>Contact Us</button></a>
                <a href="#services"><button>Services</button></a>
                <a href="#courses"><button>Courses</button></a>
            </div>

            <section id="about">

            </section>
            <section id="contact">

            </section>
            <section id="services">

            </section>
            <section id="courses">

            </section>
        </div>
    );
};

export default Logo_Page;
