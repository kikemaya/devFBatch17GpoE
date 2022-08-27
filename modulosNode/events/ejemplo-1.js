// nos permite crear nuestros propios eventos
const EventEmitter = require("events")
const emitter = new EventEmitter()

// muy parecido a un eventlistener
// definir las reglas del evento
// si el evento tal ocurre, se ejecuta este codigo
emitter.on("saludar", (args) => {
  console.log('Hola ' + args.nombre);
})

emitter.emit("saludar", {
  edad: 20,
  nombre: "Flor"
})

