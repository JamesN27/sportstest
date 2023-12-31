// pages/calendar/index.js
'use client';
import React, { useEffect, useState } from 'react';
import EventForm from './eventForm'; // Update the path based on your file structure

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Sport Calendar</h1>
      <EventForm /> {/* Include the EventForm component here */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.date}, {event.time}, {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPage;
