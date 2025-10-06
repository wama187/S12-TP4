const express = require('express');
const { createTables } = require('./tables');
const pool = require('./database');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    res.status(500).send("Error obteniendo usuarios");
  }
});

app.post('/usuarios', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (nombre, correo, contraseña) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creando usuario:", error);
    res.status(500).send("Error creando usuario");
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error eliminando usuario:", error);
    res.status(500).send("Error eliminando usuario");
  }
});

app.listen(port, async () => {
  console.log(`Aplicación lista en http://localhost:${port}`);
  await createTables().catch(err => console.error(err));
});