"use strict"

class Animal {
  constructor(especieRecibida, color, sonido) {
    this.especie = especieRecibida,
    this.color = color,
    this.sonido = sonido
  }
  // obtener de esta clase, el sonido y ponerlo en el metodo
  emitirSonido() {
    return console.log('Mi sonido es: ' + this.sonido);
  }
}

const jirafa = new Animal('Jirafa', 'amarillo', null)
const leon = new Animal('Leon', 'anaranjado', 'rwaaar')

console.log(jirafa.especie);
console.log(leon.color);

jirafa.emitirSonido()