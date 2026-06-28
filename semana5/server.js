
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.get('/saludo', (req, res) => {
  res.send('¡Hola! Bienvenido al servidor');
});

app.get('/despedida', (req, res) => {
  res.send('¡Adiós! Gracias por visitar el servidor');
});

app.get('/mensaje/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.send(`¡Hola, ${nombre}! Bienvenido al servidor`);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
