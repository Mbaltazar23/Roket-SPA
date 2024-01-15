const express = require('express');
const router = express.Router();
const arbolesController = require('../controllers/arbolesController');

router.get('/', arbolesController.getArboles);
router.get('/ubicacion/:id', arbolesController.getUbicacionArbol);
router.get('/:arbol_id', arbolesController.getArbolById);

module.exports = router;
