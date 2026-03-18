const db = require('../config/db');

// Insertar consulta
const insertConsulta = async (consulta) => {
    const { estudiante_id, tipo, descripcion, fecha, estado } = consulta;

    return await db.query(
        'INSERT INTO consultas (estudiante_id, tipo, descripcion, fecha, estado) VALUES (?, ?, ?, ?, ?)',
        [estudiante_id, tipo, descripcion, fecha, estado || 'Pendiente']
    );
};

// Obtener todas con JOIN
const getConsultas = async () => {
    const [rows] = await db.query(`
        SELECT c.id, e.nombre as alumno, c.tipo, c.descripcion, c.fecha, c.estado 
        FROM consultas c 
        JOIN estudiantes e ON c.estudiante_id = e.id
    `);
    return rows;
};

// Eliminar
const deleteConsulta = async (id) => {
    return await db.query('DELETE FROM consultas WHERE id = ?', [id]);
};

module.exports = {
    insertConsulta,
    getConsultas,
    deleteConsulta
};