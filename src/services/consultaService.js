const consultaModel = require('../models/consultaModel');

const obtenerConsultasService = async () => {
    return await consultaModel.getConsultas();
};

const registrarConsultaService = async (data) => {
    const { estudiante_id, tipo, descripcion } = data;

    // Validación de campos obligatorios
    if (!estudiante_id || !tipo || !descripcion) {
        throw new Error('Faltan datos obligatorios para la consulta (ID estudiante, tipo o descripción)');
    }

    return await consultaModel.insertConsulta(data);
};

const eliminarConsultaService = async (id) => {
    return await consultaModel.deleteConsulta(id);
};

module.exports = { 
    obtenerConsultasService, 
    registrarConsultaService, 
    eliminarConsultaService 
};