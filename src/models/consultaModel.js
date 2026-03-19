const db = require('../config/db');

// Obtener todas con el nombre del estudiante
const getConsultas = async () => {
    const [rows] = await db.query(`
        SELECT c.id, e.nombre as alumno, c.tipo, c.descripcion, c.fecha, c.estado 
        FROM consultas c 
        JOIN estudiantes e ON c.estudiante_id = e.id
    `);
    return rows;
};

// Insertar nueva consulta
const insertConsulta = async (datos) => {
    const { estudiante_id, tipo, descripcion } = datos;
    return await db.query(
        'INSERT INTO consultas (estudiante_id, tipo, descripcion, fecha, estado) VALUES (?, ?, ?, NOW(), ?)',
        [estudiante_id, tipo, descripcion, 'Pendiente']
    );
};

// Eliminar consulta
const deleteConsulta = async (id) => {
    return await db.query('DELETE FROM consultas WHERE id = ?', [id]);
};

module.exports = { getConsultas, insertConsulta, deleteConsulta };