const consultaService = require('../services/consultaService');

const obtenerConsultas = async (req, res) => {
    try {
        const consultas = await consultaService.obtenerConsultasService();
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearConsulta = async (req, res) => {
    try {
        const resultado = await consultaService.registrarConsultaService(req.body);
        res.status(201).json({ message: 'Consulta registrada con éxito' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminarConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        await consultaService.eliminarConsultaService(id);
        res.json({ message: 'Consulta eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { obtenerConsultas, crearConsulta, eliminarConsulta };