import postgres from 'postgres';
import pool from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM events');
      client.release();
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ message: 'Error fetching events' });
    }
  } else if (req.method === 'POST') {
    try {
      const { date, time, sport, homeTeam, awayTeam } = req.body;

      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO events (date, time, sport, home_team, away_team) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [date, time, sport, homeTeam, awayTeam],
      );
      client.release();
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error inserting event:', error);
      res.status(500).json({ message: 'Error inserting event' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
