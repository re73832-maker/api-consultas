const consultaService = require('../services/consultaService');

// CREAR
const crearConsulta = async (req, res) => {
    try {
        const result = await consultaService.crearConsultaService(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// OBTENER
const obtenerConsultas = async (req, res) => {
    try {
        const data = await consultaService.obtenerConsultasService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// ELIMINAR
const eliminarConsulta = async (req, res) => {
    try {
        await consultaService.eliminarConsultaService(req.params.id);
        res.json({ mensaje: 'Cita eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    crearConsulta,
    obtenerConsultas,
    eliminarConsulta
};