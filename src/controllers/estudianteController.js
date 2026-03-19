const db = require('../config/db');

// Obtener todos los estudiantes
const obtenerConsultas = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM estudiantes');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un estudiante
const crearConsulta = async (req, res) => {
    try {
        const { nombre, carrera } = req.body;
        await db.query('INSERT INTO estudiantes (nombre, carrera) VALUES (?, ?)', [nombre, carrera]);
        res.json({ message: 'Estudiante creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ELIMINAR un estudiante (DELETE)
const eliminarConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM estudiantes WHERE id = ?', [id]);
        res.json({ message: 'Estudiante eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ACTUALIZAR un estudiante (PUT)
const actualizarConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, carrera } = req.body;
        await db.query('UPDATE estudiantes SET nombre = ?, carrera = ? WHERE id = ?', [nombre, carrera, id]);
        res.json({ message: 'Estudiante actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    obtenerConsultas, 
    crearConsulta, 
    eliminarConsulta, 
    actualizarConsulta 
};