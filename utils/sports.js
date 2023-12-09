import postgres from 'postgres';
import { sql } from './db.mjs'; // Import the sql instance from db.js

export async function getAllSports() {
  try {
    const result = await sql`
      SELECT
        *
      FROM
        sports
    `;
    return result;
  } catch (error) {
    console.error('Error fetching sports:', error);
    throw error;
  }
}
