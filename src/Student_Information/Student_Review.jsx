import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentReview.css'

const ReviewsScroll = () => {
    const [reviews, setReviews] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    // Fetch data from Spring Boot API
    useEffect(() => {
        axios.get('http://localhost:8080/student/getReview') // Update the URL to match your endpoint
            .then(response => {
                setReviews(response.data);
            })

            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    }, []);

    return (
        <div>  <h2 className="review-section-title">Student stories</h2>
            <div className="review-box-container">
                {reviews.length === 0 && (
                    <p className="empty-state">Student reviews will appear here soon.</p>
                )}
                {reviews.map((item, index) => (
                    <div key={index} className="review-box">
                        <p className="review-text">
                            {expandedIndex === index
                                ? item.review
                                : item.review.length > 100
                                    ? `${item.review.slice(0, 100)}... `
                                    : item.review}
                            {item.review.length > 100 && (
                                <button onClick={() => handleToggleExpand(index)} className="read-more">
                                    {expandedIndex === index ? 'Read less' : 'Read more'}
                                </button>
                            )}
                        </p>
                        <p>Rating: {item.rating}</p>
                        <p className='name'>– {item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsScroll;
