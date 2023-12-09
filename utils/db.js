import camelcaseKeys from 'camelcase-keys';
import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

const sql = postgres({
  user: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

export async function addEvent(data) {
  const events = await sql`
    INSERT INTO events
      (date, time, sport, home_team, away_team)
    VALUES
      (${data.date}, ${data.time}, ${data.sport}, ${data.homeTeam}, ${data.awayTeam})
    RETURNING *;
  `;

  return events.map((u) => camelcaseKeys(u))[0];
}

// Add other functions as needed for different database operations

export async function getEvents() {
  const events = await sql`
    SELECT * FROM events;
  `;

  return events.map((u) => camelcaseKeys(u));
}

export async function deleteEvent(id) {
  const deletedEvent = await sql`
    DELETE FROM events
    WHERE id = ${id};
  `;

  return deletedEvent.map((u) => camelcaseKeys(u));
}

// Add other functions for different operations like filtering events, updating events, etc.
