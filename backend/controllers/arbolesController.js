const arbolesModel = require('../models/arbolesModel');

const getArboles = async (req, res) => {
  try {
    const arboles = await arbolesModel.getArboles();
    res.json(arboles);
  } catch (error) {
    console.error('Error al obtener árboles:', error);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
};

const getUbicacionArbol = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await arbolesModel.getUbicacionArbol(id);
    res.json(result);
  } catch (error) {
    console.error('Error al obtener la ubicación del árbol:', error);
    return res.status(500).json({
      mensaje: 'Error interno del servidor.'
    });
  }
};

const getArbolById = async (req, res) => {
  const { arbol_id } = req.params;
  try {
    const arbol = await arbolesModel.getArbolById(arbol_id);
    res.json(arbol);
  } catch (error) {
    console.error('Error al obtener el árbol por ID:', error);
    return res.status(500).json({
      mensaje: 'Error interno del servidor.'
    });
  }
};

module.exports = { getArboles, getUbicacionArbol, getArbolById };
