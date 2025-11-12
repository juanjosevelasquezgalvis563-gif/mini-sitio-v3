const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/public/contacto.html");
});

app.post("/enviar", (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  if (!nombre || !correo || !mensaje) {
    return res.send("Todos los campos son obligatorios.");
  }
  res.send(`<h2>Enviado correctamente, gracias ${nombre}!</h2>`);
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor activo en http://localhost:${PORT}`));
