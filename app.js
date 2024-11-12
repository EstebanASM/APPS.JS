const express = require('express');
const app = express();
const port = 8180;

app.get('/', (req, res) => {
  res.send('HOLA SOY ESTEBAN Y ESTA ES UN DEBER DE PROGRAMACION DISTRIBUIDA');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
