'use client';
import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    sport: '',
    homeTeam: '',
    awayTeam: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (send data to backend API)
    console.log(formData); // For testing, log form data to console
    // Reset form fields
    setFormData({
      date: '',
      time: '',
      sport: '',
      homeTeam: '',
      awayTeam: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      {/* Other input fields for time, sport, home team, away team */}
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
