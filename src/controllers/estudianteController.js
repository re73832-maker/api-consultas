// src/controllers/estudianteController.js
const estudianteService = require('../services/estudianteService');

// Obtener todos los estudiantes
const obtenerConsultas = async (req, res) => {
    try {
        const rows = await estudianteService.obtenerEstudiantesService();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un estudiante (Aquí aplicamos las validaciones del Service)
const crearConsulta = async (req, res) => {
    try {
        // Pasamos el body al service (él validará nombre, email, carrera y duplicados)
        const resultado = await estudianteService.registrarEstudianteService(req.body);
        res.status(201).json(resultado);
    } catch (error) {
        // Si el Service lanza un error (ej: email inválido), respondemos 400
        res.status(400).json({ error: error.message });
    }
};

// ELIMINAR un estudiante
const eliminarConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        await estudianteService.eliminarEstudianteService(id);
        res.json({ message: 'Estudiante eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ACTUALIZAR un estudiante
const actualizarConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        await estudianteService.actualizarEstudianteService(id, req.body);
        res.json({ message: 'Estudiante actualizado con éxito' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { 
    obtenerConsultas, 
    crearConsulta, 
    eliminarConsulta, 
    actualizarConsulta 
};