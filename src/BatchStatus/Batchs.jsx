import React, { useState } from 'react';
import './batchs.css';

const Batch_List = () => {
  const [meetings, setMeetings] = useState([]);

  // Set default date to today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    meetingDate: today, // Default date
    meetingTime: '10:00 AM - 11:00 AM' // Default time slot
  });

  const batches = [
    { id: 1, name: 'Weekday batch', time: 'Morning and afternoon options', date: 'Enrollment open' },
    { id: 2, name: 'Weekend batch', time: 'Weekend schedule', date: 'Ask about the next intake' },
  ];

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book the meeting');
      }

      const newMeeting = {
        id: meetings.length + 1,
        ...formData
      };

      setMeetings([...meetings, newMeeting]);

      // Reset form fields
      setFormData({ name: '', email: '', meetingDate: today, meetingTime: '10:00 AM - 11:00 AM' });
      alert('Meeting booked successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error booking the meeting. Please try again.');
    }
  };

  return (
    <div className="Batch-Container">
      <h2 className='heading'>Event Details</h2>
      <div className="flex-container">
        <div className="meeting-section">
          <h2>Book a One-on-One Meeting</h2>
          <form className="meeting-form" onSubmit={handleSubmit}>
            <label>
              Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Select Date: <input type="date" name="meetingDate" value={formData.meetingDate} onChange={handleChange} min={today} required />
              {/* Restrict selection to today or future dates */}
            </label>
            <label>
              Select Time Slot:<select name="meetingTime" value={formData.meetingTime} onChange={handleChange}>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </label>
            <button type="submit">Book Meeting</button>
          </form>

          <ul>
            {meetings.map(meeting => (
              <li key={meeting.id}>
                {meeting.name} - {meeting.email} - {meeting.meetingDate} - {meeting.meetingTime}
              </li>
            ))}
          </ul>
        </div>

        <div className="batches-section">
          <h2>New Course Batches</h2>
          <div className="batch-list">
            {batches.map(batch => (
              <div className="batch" key={batch.id}>
                <h3>{batch.name}</h3>
                <p>Date: <strong>{batch.date}</strong></p>
                <p>Time: <strong>{batch.time}</strong></p>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-section">
          <h2>Upcoming Demo Sessions</h2>
          <p>Join us to learn more about the course!</p>
          <p>Date: <strong>Contact us for the next session</strong></p>
          <p>Time: <strong>Flexible session options</strong></p>
          <a className="demo-link" href="#contact">Ask about a demo</a>
        </div>
      </div>
    </div>
  );
};

export default Batch_List;
