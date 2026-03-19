DROP DATABASE IF EXISTS consultas_escolares_db;
CREATE DATABASE IF NOT EXISTS consultas_escolares_db;
USE consultas_escolares_db;

CREATE TABLE estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    carrera VARCHAR(100) NOT NULL
);

CREATE TABLE consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT,
    tipo VARCHAR(100),
    descripcion TEXT,
    fecha DATETIME,
    estado VARCHAR(50),
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id)
);
USE railway; -- Esto asegura que se aplique a la base de datos de la nube
ALTER TABLE estudiantes ADD COLUMN email VARCHAR(100) NOT NULL UNIQUE AFTER nombre;