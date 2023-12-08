'use client';
import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [sport, setSport] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the event data
    const eventData = { date, time, sport, homeTeam, awayTeam };
    onSubmit(eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label>
        Sport:
        <input
          type="text"
          value={sport}
          onChange={(e) => setSport(e.target.value)}
          required
        />
      </label>
      <label>
        Home Team:
        <input
          type="text"
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
          required
        />
      </label>
      <label>
        Away Team:
        <input
          type="text"
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
