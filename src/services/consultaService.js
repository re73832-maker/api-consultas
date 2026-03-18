const consultaModel = require('../models/consultaModel');

// Crear consultas
const crearConsultaService = async (data) => {
    const consultas = Array.isArray(data) ? data : [data];

    for (const consulta of consultas) {
        const { estudiante_id, tipo, descripcion, fecha } = consulta;

        // Validaciones básicas
        if (!estudiante_id || !tipo || !descripcion || !fecha) {
            throw new Error('Faltan datos obligatorios en una consulta');
        }

        await consultaModel.insertConsulta(consulta);
    }

    return {
        mensaje: `Se registraron ${consultas.length} cita(s) correctamente`
    };
};

// Obtener
const obtenerConsultasService = async () => {
    return await consultaModel.getConsultas();
};

// Eliminar
const eliminarConsultaService = async (id) => {
    await consultaModel.deleteConsulta(id);
};

module.exports = {
    crearConsultaService,
    obtenerConsultasService,
    eliminarConsultaService
};