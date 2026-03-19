// src/models/estudianteModel.js
const db = require('../config/db');

const getEstudiantes = async () => {
    const [rows] = await db.query('SELECT * FROM estudiantes');
    return rows;
};

const getByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM estudiantes WHERE email = ?', [email]);
    return rows;
};

const insertEstudiante = async (nombre, email, carrera) => {
    return await db.query(
        'INSERT INTO estudiantes (nombre, email, carrera) VALUES (?, ?, ?)',
        [nombre, email, carrera]
    );
};

const updateEstudiante = async (id, nombre, carrera) => {
    return await db.query(
        'UPDATE estudiantes SET nombre = ?, carrera = ? WHERE id = ?',
        [nombre, carrera, id]
    );
};

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