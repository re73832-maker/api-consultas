const express = require('express');
const router = express.Router();
const { 
    crearConsulta, 
    obtenerConsultas, 
    eliminarConsulta, 
    actualizarConsulta 
} = require('../controllers/estudianteController');

router.get('/', obtenerConsultas);
router.post('/', crearConsulta);
router.delete('/:id', eliminarConsulta);
router.put('/:id', actualizarConsulta);

module.exports = router;