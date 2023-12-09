// pages/calendar/index.js
'use client';
import React, { useEffect, useState } from 'react';
import EventForm from './eventForm';

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

  const handleFormSubmit = async (eventData) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        const newEvent = await response.json();
        setEvents([...events, newEvent]);
      } else {
        console.error('Failed to add event');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <h1>Sport Calendar</h1>
      <EventForm onSubmit={handleFormSubmit} />
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
