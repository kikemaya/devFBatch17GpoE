// transforma los elementos de un arreglo por cada iteracion y nos devuelve un nuevo arreglo
const numbers = [1, 2, 3, 4, 5]

const numbers2 = numbers.map(number => {
  return number * 2
})

const productos = [
  {
    id: 1,
    nombre: "jabon",
    precio: 50
  },
  {
    id: 2,
    nombre: "llanta",
    precio: 100
  },
  {
    id: 3,
    nombre: "zapato",
    precio: 150
  }
]

console.log(numbers2);

const precioPorDos = productos.map(producto => {
  producto.id = producto.id + 4
  return producto.precio * 2
})

productos[0].id = 1

console.log('original', productos);
console.log('copia', precioPorDos);
