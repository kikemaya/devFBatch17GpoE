"use strict";

//danielapi.com/usuarios

function obtenerDatos() {
  const inputNombre = document.getElementById("inputNombre").value;

  fetch(
    `http://localhost:4000/obtenerusuarios?nombre=${inputNombre}&ciudad=méxico`
  )
    .then((response) => response.json())
    .then((data) => {
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      nombre.innerHTML = data.nombre;
      apellido.innerHTML = data.apellido;
    })
    .catch((err) => {
      console.log("Este es el error: ", err);
    });
}

function crearUsuarios() {
  const usuario = {
    name: "Karina",
    apellido: "Arriaga",
  };

  fetch("http://localhost:4000/guardarusuarios", {
    method: "POST", // or 'PUT'
    body: JSON.stringify(usuario), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });
}
