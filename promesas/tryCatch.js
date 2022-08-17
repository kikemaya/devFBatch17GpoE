"use strict";

function suma(num1, num2) {
  try {
    const valorSuma = num1 + num2;
    return valorSuma;
  } catch (error) {
    console.log("error ", error);
    return "Algo salio mal intentelo mas tarde :D";
  }
}

const respuestaSuma = suma(5, 10);
console.log("respuestaSuma ", respuestaSuma);

// POST => Enviar datos
// GET => Obtener datos
// Update => Actualizar datos
// Patch => Actualizar datos (Mas especificos)
// Delete => Eliminar datos