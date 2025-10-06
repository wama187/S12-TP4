const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@db:5432/mydatabase',
});
module.exports = pool;
