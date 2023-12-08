import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

const pool = postgres({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'sportscalendar',
});

export default pool;
