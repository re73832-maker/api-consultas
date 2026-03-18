const estudianteService = require('../services/estudianteService');

// OBTENER
const obtenerEstudiantes = async (req, res) => {
    try {
        const data = await estudianteService.obtenerEstudiantesService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// REGISTRAR
const registrarEstudiante = async (req, res) => {
    try {
        const result = await estudianteService.registrarEstudianteService(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// ACTUALIZAR
const actualizarEstudiante = async (req, res) => {
    try {
        await estudianteService.actualizarEstudianteService(req.params.id, req.body);
        res.json({ mensaje: 'Datos actualizados' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// ELIMINAR
const eliminarEstudiante = async (req, res) => {
    try {
        await estudianteService.eliminarEstudianteService(req.params.id);
        res.json({ mensaje: 'Alumno eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerEstudiantes,
    registrarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};