const pool = require('../config/config');

const getFotoArbol = async (arbolId) => {
  try {
    const result = await pool.query('SELECT * FROM roket.fotos WHERE arbol_id = $1', [arbolId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { getFotoArbol };
