const db = require('../config/db');

// Obtener todos
const getEstudiantes = async () => {
    const [rows] = await db.query('SELECT * FROM estudiantes');
    return rows;
};

// Buscar por email
const getByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM estudiantes WHERE email = ?', [email]);
    return rows;
};

// Insertar
const insertEstudiante = async (nombre, email, carrera) => {
    return await db.query(
        'INSERT INTO estudiantes (nombre, email, carrera) VALUES (?, ?, ?)',
        [nombre, email, carrera]
    );
};

// Actualizar
const updateEstudiante = async (id, nombre, carrera) => {
    return await db.query(
        'UPDATE estudiantes SET nombre = ?, carrera = ? WHERE id = ?',
        [nombre, carrera, id]
    );
};

// Eliminar
const deleteEstudiante = async (id) => {
    return await db.query('DELETE FROM estudiantes WHERE id = ?', [id]);
};

module.exports = {
    getEstudiantes,
    getByEmail,
    insertEstudiante,
    updateEstudiante,
    deleteEstudiante
};