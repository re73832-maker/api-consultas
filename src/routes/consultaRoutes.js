const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.get('/', consultaController.obtenerConsultas);
router.post('/', consultaController.crearConsulta);
router.delete('/:id', consultaController.eliminarConsulta);

module.exports = router;