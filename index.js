const express = require("express");
require("dotenv").config();

// Crear el servido express
const app = express();

// Directorio Publico
app.use(express.static("public"));

// Rutas
app.use("/api/auth", require("./routes/auth"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
