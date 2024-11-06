import React from 'react';
import './fottorSection.css'; // Ensure to import the CSS for styles
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="map-section">
                <h2>Our Location</h2>
                <iframe className='map'
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.302005982285!2d77.64034531428635!3d12.935291690927373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e3e2bdc3af%3A0x3b52f2401c2c9c0!2s2nd%20floor%2C%20166%2C%205th%20main%20rd%2C%20Marathahalli%20Village%2C%20Marathahalli%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1605546784560!5m2!1sen!2sin&maptype=terrain"
                    width="300"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>

            <div className="footer-content">
                <div className="links">
                    <h4>Institute Links</h4>
                    <ul className='ln'>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#courses">Courses</a></li>
                    </ul>
                </div>

                <div className="contact-details">
                    <h4>Contact Us</h4>
                    <p>Address: 2nd floor, 166, 5th Main Rd, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037</p>
                    <p>Phone: <a href={`tel:+918096018847`}>91+ 8096018847</a></p>
                    <p>Email: <a href={`mailto:mallikarjunareddy8890@gmail.com`}>mallikarjunareddy8890@gmail.com</a>
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://wa.me/918096018847?text=Hi, I'd like to get in touch!"
                            className="whatsapp-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="whatsapp-icon" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="rights">
                <p>&copy; 2024 Your Institute. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
