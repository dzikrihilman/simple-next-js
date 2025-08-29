import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbsimple',
  password: 'root',
  port: 5432,
});

export { pool };