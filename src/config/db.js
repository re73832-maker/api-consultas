const mysql = require('mysql2/promise');
const path = require('path');

// Esto fuerza a buscar el .env dos carpetas arriba de donde está este archivo (fuera de config y fuera de src)
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Logs de verificación
console.log('--- Verificando Variables de Entorno ---');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT || 3306);
console.log('---------------------------------------');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Prueba de conexión
pool.getConnection()
    .then(connection => {
        console.log('✅ ¡Conexión a la base de datos MySQL en Railway exitosa!');
        connection.release();
    })
    .catch(err => {
        console.error('❌ Error al conectar a la base de datos:', err.message);
        console.error('Detalle:', err.code);
    });

module.exports = pool;