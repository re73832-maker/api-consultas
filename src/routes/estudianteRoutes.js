const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware'); // <-- Importamos el protector de rutas
const { 
    crearConsulta, 
    obtenerConsultas, 
    eliminarConsulta, 
    actualizarConsulta 
} = require('../controllers/estudianteController');

// RUTA PÚBLICA: Cualquier usuario puede ver la lista (Lectura)
router.get('/', obtenerConsultas);

// RUTAS PROTEGIDAS: Solo usuarios con Token JWT pueden modificar (Escritura)
// Al agregar 'auth' antes del controlador, el sistema verifica el token primero.
router.post('/', auth, crearConsulta);
router.delete('/:id', auth, eliminarConsulta);
router.put('/:id', auth, actualizarConsulta);

module.exports = router;