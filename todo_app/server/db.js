// ===============================
// 🗄️ server/db.js
// ===============================
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_db',
  password: '7777',
  port: 5432
});

module.exports = pool;