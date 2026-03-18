const express = require('express');
const path = require('path');
const app = express();
const estudianteRoutes = require('./routes/estudianteRoutes');

// 1. Configuración de datos (Middlewares)
app.use(express.json());

// 2. Definir la ruta de la carpeta public (Ahora está al mismo nivel que index.js)
const publicPath = path.join(__dirname, 'public');

// 3. Servir archivos estáticos
app.use(express.static(publicPath));

// 4. Forzar la entrega del index.html en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// 5. Rutas de la API
app.use('/api/estudiantes', estudianteRoutes);

// 6. Encendido del servidor (Railway usa el puerto que él asigne)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('--------------------------------------------');
    console.log(`🚀 Servidor en línea`);
    console.log(`📂 Serviendo HTML desde: ${publicPath}`);
    console.log('--------------------------------------------');
});