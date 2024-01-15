const pool = require('../config/config');

const getArboles = async () => {
  try {
    const result = await pool.query('SELECT * FROM roket.arboles');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getUbicacionArbol = async (id_ubicacion) => {
  try {
    const result = await pool.query('SELECT * FROM roket.ubicaciones WHERE ubicacion_id = $1', [id_ubicacion]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getArbolById = async (arbol_id) => {
  try {
    const result = await pool.query('SELECT * FROM roket.arboles WHERE arbol_id = $1', [arbol_id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { getArboles, getUbicacionArbol, getArbolById };
