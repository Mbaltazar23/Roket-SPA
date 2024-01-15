const fotosModel = require('../models/fotosModel');

const getFotoArbol = async (req, res) => {
  const { arbolId } = req.params;
  try {
    const foto = await fotosModel.getFotoArbol(arbolId);
    res.json(foto);
  } catch (error) {
    console.error('Error al obtener la foto del árbol:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getFotoArbol };
