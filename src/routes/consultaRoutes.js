const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware'); // <-- Importamos el protector (Middleware)
const consultaController = require('../controllers/consultaController');

// RUTA PÚBLICA: Ver las consultas (para que el frontend las cargue)
router.get('/', consultaController.obtenerConsultas);

// RUTAS PROTEGIDAS: Se requiere Token JWT para crear o eliminar
// Al poner 'auth' en medio, el servidor verifica el token antes de ejecutar el controlador.
router.post('/', auth, consultaController.crearConsulta);
router.delete('/:id', auth, consultaController.eliminarConsulta);

module.exports = router;