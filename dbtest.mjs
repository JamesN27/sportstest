import { config } from 'dotenv-safe';
import postgres from 'postgres';
import { addEvent } from './utils/db.mjs'; // Update the path according to your file structure

config();

const sql = postgres();

console.log(
  await sql`
    SELECT
      *
    FROM
      events;
  `,
);

await sql.end();

const handleFormSubmit = async (data) => {
  try {
    // Use the addEvent function to insert data into the database
    const insertedEvent = await addEvent(data);
    console.log('Inserted event:', insertedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
  }
};

// Simulate data from the form
const formData = {
  date: '2023-12-31',
  time: '18:00',
  sport: 'Football',
  homeTeam: 'Home Team',
  awayTeam: 'Away Team',
};

// Call handleFormSubmit with the form data
handleFormSubmit(formData);
