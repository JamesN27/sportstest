import pg from 'pg';
import postgres from 'postgres';

const pool = new postgres.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sportscalendar',
  password: 'postgres',
  port: 5432,
});

export default pool;
