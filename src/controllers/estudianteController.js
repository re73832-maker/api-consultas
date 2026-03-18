const pool = require('../config/db');

// Listar todos los alumnos
const obtenerEstudiantes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM estudiantes');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron traer los datos' });
    }
};

// Guardar un nuevo alumno
const crearEstudiante = async (req, res) => {
    const { nombre, carrera } = req.body;

    // Validación simple (Esto hace que el código se vea profesional)
    if (!nombre || !carrera) {
        return res.status(400).json({ msg: 'Faltan campos obligatorios: nombre y carrera' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO estudiantes (nombre, carrera) VALUES (?, ?)',
            [nombre, carrera]
        );
        res.status(201).json({ id: result.insertId, nombre, carrera, msg: 'Estudiante creado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar en la DB' });
    }
};

module.exports = { obtenerEstudiantes, crearEstudiante };