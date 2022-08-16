"use strict"

let x = 10

const promesaEjemplo = new Promise((resolve, reject) => {
  if (x === 10) {
    return resolve('Promesa cumplida, little Timmy :")')
  }
  return reject('Uste confio en mi y yo le falle...')
})

promesaEjemplo
  .then((response) => {
    console.log(response);
    return 'Otra respuesta'
  })
  .then((response2) => {
    console.log(response2);
  })
  .then(() => {
    console.log('Soy un then sin parametros/ puedo ser logica...');
  })
  .catch((error) => {
    console.error(error);
  })
