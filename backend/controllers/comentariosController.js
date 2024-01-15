const comentariosModel = require('../models/comentariosModel');

const agregarComentario = async (req, res) => {
  const postulanteIdFijo = "000-5"; // Valor fijo
  const { arbolId, comentario } = req.body;

  try {
    await comentariosModel.agregarComentario(arbolId, postulanteIdFijo, comentario);
    res.json({ success: true, message: 'Comentario agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar comentario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const registrarPostulacion = async (req, res) => {
  const postulante = req.body;

  try {
    const postulanteRegistrado = await comentariosModel.registrarPostulacion(postulante);
    res.json({ success: true, message: 'Postulante registrado exitosamente', postulante: postulanteRegistrado });
  } catch (error) {
    console.error('Error al registrar postulante:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { agregarComentario, registrarPostulacion };
