import React from 'react';
import './InstituteInfo.css';
import instituteLogo from '../Institute_releated_Images/institute_logo.jpeg';

function InstituteInfo() {
    return (
        <div className="instituteInfo-container">
            <div className="instituteInfo-image">
                <img 
                    src={instituteLogo}
                    alt="FCS Training Institute logo"
                />
            </div>
            <div className="instituteInfo-content">
                <h2>Our Institute's Mission</h2>
                <p>
                    We are committed to offering high-quality education that equips students with practical skills,
                    enabling them to succeed in the competitive world.
                </p>
                <p>
                    Our aim is to bridge the gap between theoretical knowledge and real-world application, 
                    focusing on a hands-on learning approach.
                </p>
            </div>
        </div>
    );
}

export default InstituteInfo;
