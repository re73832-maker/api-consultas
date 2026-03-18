const estudianteModel = require('../models/estudianteModel');

// Obtener
const obtenerEstudiantesService = async () => {
    return await estudianteModel.getEstudiantes();
};

// Registrar
const registrarEstudianteService = async (data) => {
    const estudiantes = Array.isArray(data) ? data : [data];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (const estudiante of estudiantes) {
        const { nombre, email, carrera } = estudiante;

        if (!nombre || !email || !carrera) {
            throw new Error('Faltan datos obligatorios');
        }

        if (!emailRegex.test(email)) {
            throw new Error(`Email inválido: ${email}`);
        }

        const existe = await estudianteModel.getByEmail(email);
        if (existe.length > 0) continue;

        await estudianteModel.insertEstudiante(nombre, email, carrera);
    }

    return { mensaje: 'Inscripción completada' };
};

// Actualizar
const actualizarEstudianteService = async (id, data) => {
    const { nombre, carrera } = data;
    await estudianteModel.updateEstudiante(id, nombre, carrera);
};

// Eliminar
const eliminarEstudianteService = async (id) => {
    await estudianteModel.deleteEstudiante(id);
};

module.exports = {
    obtenerEstudiantesService,
    registrarEstudianteService,
    actualizarEstudianteService,
    eliminarEstudianteService
};