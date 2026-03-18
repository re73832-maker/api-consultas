const express = require('express');
const router = express.Router();
const { 
    registrarEstudiante, 
    obtenerEstudiantes, 
    actualizarEstudiante, 
    eliminarEstudiante 
} = require('../controllers/estudianteController');

router.post('/', registrarEstudiante);
router.get('/', obtenerEstudiantes);
router.put('/:id', actualizarEstudiante);
router.delete('/:id', eliminarEstudiante);

module.exports = router;