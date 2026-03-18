// Cargar variables de entorno (IMPORTANTE que sea lo primero)
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// Importar rutas
const rutasEstudiantes = require('./routes/estudianteRoutes');
const rutasConsultas = require('./routes/consultaRoutes');

// Conexión a la base de datos
require('./config/db');

// Middlewares
app.use(cors());
app.use(express.json());

// 🔍 PRUEBA (puedes quitarla después)
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);

// Ruta de prueba
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: '¡API funcionando!' });
});

// Rutas principales
app.use('/api/estudiantes', rutasEstudiantes);
app.use('/api/consultas', rutasConsultas);

// Middleware global de errores (SIEMPRE al final)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        mensaje: 'Ocurrió un error interno en el servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});