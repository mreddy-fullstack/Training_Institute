import React, { useEffect, useState, useRef } from 'react';
import './PlacedStudent.css';

const PlacedStudents = () => {
    const [data, setData] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/student/getReview');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);

    const convertBlobToImage = (blobData) => {
        return `data:image/jpeg;base64,${blobData}`;
    };

    const handleToggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div><h2 className='title'>Our receently placed students</h2>
            <div
                className="placed-students-container"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="cards-wrapper">
                    {data.map((item, index) => (
                        <div className="card" key={item.id}>
                            <img src={convertBlobToImage(item.image)} alt={item.name} className="image" />
                           <h3>Role : </h3>
                           <h3>Package : </h3>
                           <h3>Company : </h3>
                           <h3 className="student-name"> -{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlacedStudents;
