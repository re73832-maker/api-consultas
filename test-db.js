const pool = require('./src/config/db'); // Importamos tu conexión configurada

async function probarBaseDeDatos() {
    try {
        console.log("🚀 Iniciando prueba de base de datos...");

        // 1. Crear la tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS estudiantes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(100) NOT NULL,
                carrera VARCHAR(100),
                fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Tabla 'estudiantes' verificada/creada.");

        // 2. Insertar un estudiante de ejemplo
        const [result] = await pool.query(
            "INSERT INTO estudiantes (nombre, carrera) VALUES (?, ?)",
            ["Juan Perez", "Ingeniería en Sistemas"]
        );
        console.log(`✅ Estudiante insertado con ID: ${result.insertId}`);

        // 3. Consultar todos los estudiantes
        const [rows] = await pool.query("SELECT * FROM estudiantes");
        console.log("📋 Lista de estudiantes en la base de datos:");
        console.table(rows); // Esto muestra una tablita bonita en la consola

    } catch (error) {
        console.error("❌ Error en la prueba:", error.message);
    } finally {
        // Cerramos la conexión para que el script termine
        process.exit();
    }
}

probarBaseDeDatos();