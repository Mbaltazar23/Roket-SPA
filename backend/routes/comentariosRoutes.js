const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');

router.post('/', comentariosController.agregarComentario);
router.post('/postulacion', comentariosController.registrarPostulacion);

module.exports = router;