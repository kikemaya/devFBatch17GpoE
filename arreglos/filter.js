const productos = [
  {
    id: 1,
    nombre: "jabon",
    precio: 50
  },
  {
    id: 2,
    nombre: "llanta",
    precio: 150
  },
  {
    id: 3,
    nombre: "zapato",
    precio: 150
  }
]

const filtro1 = productos.filter(producto => producto.precio === 150);
console.log(filtro1);