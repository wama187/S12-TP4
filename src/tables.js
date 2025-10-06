const pool = require('./database');

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50),
        correo VARCHAR(100),
        contraseña VARCHAR(100)
      );
    `);
    console.log("Tablas creadas o ya existían.");
  } catch (error) {
    console.error("Error creando las tablas:", error);
  }
};

module.exports = { createTables };
