// Es cuando una funcion de ordenMayor, ejecuta la(s) funcion(es) que tiene como parametro
function ordenMayor(otraFuncion) {
  return otraFuncion()  
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multi = (a, b) => a * b
const division = (a, b) => a / b

const calculadora = (a, b, operacion) => operacion(a, b)

console.log(calculadora(9, 17, suma));
console.log(calculadora(9, 17, resta));
console.log(calculadora(9, 17, multi));
consle.log(calculadora(9, 17, division));

// Tienes que usar callbacks, para hacer las demas operaciones basicas:
// resta, multiplicacion, division, usando la funcion calculadora...