const express = require('express');
const router = express.Router();
const { 
    crearConsulta, 
    obtenerConsultas, 
    eliminarConsulta 
} = require('../controllers/consultaController');

// Ruta para agendar (POST)
router.post('/', crearConsulta);

// Ruta para ver historial (GET)
router.get('/', obtenerConsultas);

// Ruta para eliminar (DELETE)
router.delete('/:id', eliminarConsulta);

module.exports = router;