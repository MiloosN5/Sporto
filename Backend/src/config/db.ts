import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import pg from 'pg';
const { Pool } = pg;

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

export const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
);

export const db = new Pool({
  host: process.env.SUPABASE_DB_HOST,
  port: Number(process.env.SUPABASE_DB_PORT),
  user: process.env.SUPABASE_DB_USER,
  password: process.env.SUPABASE_DB_PASSWORD,
  database: process.env.SUPABASE_DB_NAME,
  ssl: { rejectUnauthorized: false }
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE
  );
`;

async function testConnection() {
  try {
    const res = await db.query('SELECT NOW()');
    console.log('Connected to the Supabase PostgreSQL! Current time:', res.rows[0].now);
  } catch (error) {
    console.error('Error during the connection:', error);
  };
};

async function createTable() {
  try {
    await db.query(createTableQuery);
    console.log('Table created or already exists');
  } catch (err) {
    console.error('Error during the table creation:', err.stack);
  }
}

testConnection();
createTable();
