const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

// Cadena de conexión con tu contraseña '1234'
const pool = new Pool({
  connectionString: 'postgresql://postgres:1234@localhost:5432/hotel_db'
});

app.post('/api/feedback', async (req, res) => {
  const { name, email, age, hotelStay, choice, service, food, comments } = req.body;

  const queryText = `
    INSERT INTO hotel_feedback (name, email, age, first_time, choices, service, food, comments)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;

  try {
    const result = await pool.query(queryText, [
      name,
      email,
      age,
      hotelStay,
      choice,
      service,
      food,
      comments
    ]);
    console.log('¡Registro guardado con éxito!:', result.rows[0]);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error en base de datos:', error);
    res.status(500).json({ success: false, error: 'Error al guardar los datos' });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});