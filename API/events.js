import postgres from 'postgres';
import { addEvent, sql } from '../utils/db.mjs';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await sql`
        SELECT
          *
        FROM
          events
      `;
      res.status(200).json(result);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ message: 'Error fetching events' });
    }
  } else if (req.method === 'POST') {
    try {
      const { date, time, sport, homeTeam, awayTeam } = req.body;

      const newEvent = await addEvent({
        date,
        time,
        sport,
        homeTeam,
        awayTeam,
      });

      res.status(201).json(newEvent);
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).json({ message: 'Error adding event' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
