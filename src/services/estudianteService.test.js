const estudianteService = require('./estudianteService');
const estudianteModel = require('../models/estudianteModel');

// Simulamos el modelo para no tocar la base de datos real
jest.mock('../models/estudianteModel');

describe('Pruebas de estudianteService', () => {
    
    test('Debe lanzar error si faltan campos obligatorios', async () => {
        const datosIncompletos = { nombre: 'Juan', email: 'juan@test.com' }; // Falta carrera
        await expect(estudianteService.registrarEstudianteService(datosIncompletos))
            .rejects.toThrow('Faltan datos obligatorios');
    });

    test('Debe lanzar error si el email es inválido', async () => {
        const datosEmailFalso = { nombre: 'Juan', email: 'correo-sin-formato', carrera: 'Sistemas' };
        await expect(estudianteService.registrarEstudianteService(datosEmailFalso))
            .rejects.toThrow('Email inválido');
    });

    test('No debe insertar si el estudiante ya existe (duplicado)', async () => {
        estudianteModel.getByEmail.mockResolvedValue([{ id: 1, email: 'existe@test.com' }]);
        const datos = { nombre: 'Duplicado', email: 'existe@test.com', carrera: 'Sistemas' };
        
        const resultado = await estudianteService.registrarEstudianteService(datos);
        expect(resultado.mensaje).toBe('Inscripción completada');
        // Verificamos que NO se llamó a insert porque ya existía
        expect(estudianteModel.insertEstudiante).not.toHaveBeenCalled();
    });
});