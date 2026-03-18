const express = require('express');
const router = express.Router();
const { 
    crearConsulta, 
    obtenerConsultas, 
    eliminarConsulta,
    actualizarConsulta 
} = require('../controllers/consultaController');

router.post('/', crearConsulta);
router.get('/', obtenerConsultas);
router.delete('/:id', eliminarConsulta);
router.put('/:id', actualizarConsulta); // Ruta para actualizar

module.exports = router;