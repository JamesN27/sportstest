import pool from './db.js';

export async function getAllSports() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM sports');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Error fetching sports:', error);
    throw error;
  }
}
