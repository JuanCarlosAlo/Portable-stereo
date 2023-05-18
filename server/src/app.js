const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// Rutas
const usersRoutes = require("./routes/users.routes");
// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Uso de rutas
app.use("/users", usersRoutes);

const startServer = async () => {
  console.log(process.env.MONGODB_URL);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conected to Database");
  } catch (err) {
    console.error("Conection error");
  }
};
app.listen(process.env.PORT, () =>
  console.log("Servidor en ejecución en el puerto 3000")
);

startServer();
