const express = require('express');
const router = express.Router();
const fotosController = require('../controllers/fotosController');

router.get('/:arbolId', fotosController.getFotoArbol);

module.exports = router;
