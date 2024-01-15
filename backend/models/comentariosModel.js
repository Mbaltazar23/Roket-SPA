const pool = require('../config/config');

const agregarComentario = async (arbolId, postulanteId, comentario) => {
  try {
    const result = await pool.query('INSERT INTO roket.comentarios (arbol_id, postulante_id, comentario) VALUES ($1, $2, $3)', [arbolId, postulanteId, comentario]);
    return result.rows[0];

  } catch (error) {
    throw error;
  }
};

const registrarPostulacion = async (postulante) => {
  try {
    const result =  await pool.query('INSERT INTO roket.postulantes (postulante_id, nombre, apellido, ciudad, linkedin, guthub_tarea, telefono, otras_referencias) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [postulante.postulante_id, postulante.nombre, postulante.apellido, postulante.ciudad, postulante.linkedin, postulante.github_tarea, postulante.telefono, postulante.otras_referencias]);
    return result.rows[0];

  } catch (error) {
    throw error;
  }
};

module.exports = {
  agregarComentario,
  registrarPostulacion
};