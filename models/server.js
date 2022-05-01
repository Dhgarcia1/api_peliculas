// const express = require("express");
// var cors = require("cors");
import express from "express";
import cors from "cors";
import bdconectar from "../database/config.js";

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port = process.env.PORT;
    this.conectarbd();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  async conectarbd() {
    await bdconectar();
  }

  escuchar() {
    this.app.listen(this.port, () => {
      console.log(`servidor escuchando en el puterto ${this.port}`);
    });
  }
}
export default Server;

// let personas = [

// ];

// const app = express();

// app.use(express.json());
// app.use(cors());
// //buscar en el array
// app.get("/s", function (req, res) {
//   const { email } = req.query;
//   const persona = personas.find((persona) => persona.email === email);
//   res.json({ personas });
// });
// //listar
// app.get("/", function (req, res) {
//   res.json({ personas });
// });
// //agregar al array
// app.post("/", function (req, res) {
//   const { nombre, edad, apellido, email, password, telefono } = req.body;
//   personas.push(req.body);
//   console.log(personas);
//   res.json({ msj: "exitoso" });
// });

// app.delete("/", function (req, res) {
//   const { email } = req.query;
//   personas = personas.filter((persona) => persona.email != email);
//   res.json({
//     msg: `Registro  ha sido eliminado exitosamente`,
//   });
// });

// app.get("/login", function (req, res) {
//   const { email, password } = req.query;
//   const persona = personas.find(
//     (persona) => persona.email === email && persona.password === password
//   );
//   console.log(persona);
//   if (persona) res.json({ msg: `login exitoso` });
//   else res.json({ msg: `intentelo de nuevo` });
// });

// app.listen(3000, () => {
//   console.log(`Servidor escuchando en el puerto 2000`);
// });
// console.log(personas);
