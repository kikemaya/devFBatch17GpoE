const hola = (nombre, unaFuncion) => {
  setTimeout(() => {
    return unaFuncion(nombre)
  }, 1500);
}

const hablar = (mensaje, unaFuncion) => {
  setTimeout(() => {
    return unaFuncion(mensaje)
  }, 1100);
}

const adios = (nombre, unaFuncion) => {
  setTimeout(() => {
    return unaFuncion(nombre)
  }, 1000);
}

hola('Sam', (nombre) => {
  console.log('Hola ' + nombre)

  return hablar("bla bla bla...", (mensaje) => {
    console.log(mensaje)

    return adios(nombre, (nombre) => {
      console.log('Adios ' + nombre);
    })
  })
})