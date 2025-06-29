const express = require('express');
const app = express();
const config = require('./config');

// Endpoints
app.get('/', (req, res) => res.send('¡Hola Mundo!'));
app.get('/suma/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: Number(a) + Number(b) });
});
app.get('/error', (req, res) => {
  throw new Error('Error simulado');
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(config.port, () => {
  console.log(`Servidor en http://localhost:${config.port}`);
});