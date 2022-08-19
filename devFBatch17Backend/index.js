"use strict";

const express = require("express");
var cors = require("cors");
const app = express();
const bodyParser = require("body-parser")
const datosUsuario = require('./data.json');

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json())

//Retornar valores
app.get("/obtenerusuarios", function (req, res) {
  //Consulta una base datos, organiza los datos y los retorna al front
  const { nombre, ciudad } = req.query;
  let usuario = "";

  if (nombre) {
    const datosDefault = {
      nombre: "No se encontro al usuario",
      apellido: "",
    };

    const usuarios = [
      {
        nombre: "Daniel",
        apellido: "Silverio",
      },
      {
        nombre: "Enrique",
        apellido: "Maya",
      },
    ];

    usuario = usuarios.find(
      (usuario) => usuario.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (!usuario) usuario = datosDefault;
  } else {
    const datosDefault = {
      nombre: "El usuario no fue recibido",
      apellido: "",
    };

    usuario = datosDefault;
  }

  res.send(usuario);
});

//Guardar valores
app.post("/guardarusuarios", function (req, res) {
  const valores = req.body;
  console.log(datosUsuario);
  datosUsuario.push(valores)
  console.log(datosUsuario);
  res.send("Guardar Usuarios");
});

//Modificar valores
app.put("/modificarUsuarios", function (req, res) {
  res.send("Modificar Usuarios");
});

//Eliminar valores
app.delete("/eliminarUsuarios", function (req, res) {
  res.send("Eliminar Usuarios");
});

app.listen(4000);
