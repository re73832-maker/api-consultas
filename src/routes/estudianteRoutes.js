const express = require('express');
const router = express.Router();
const { obtenerEstudiantes, crearEstudiante } = require('../controllers/estudianteController');

// Ruta para obtener (GET) y para crear (POST)
router.get('/', obtenerEstudiantes);
router.post('/', crearEstudiante);

module.exports = router;