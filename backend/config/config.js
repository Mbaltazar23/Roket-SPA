const { Pool } = require('pg');

const pool = new Pool({
  user: 'roketuser',
  host: 'tarearoket.cv2quftjeoly.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'roket2024',
  port: 5432,
  schema: 'roket',
});

module.exports = pool;
