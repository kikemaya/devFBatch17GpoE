const os = new require("os")

console.log(os)

let memoriaLibre = os.freemem()
let memoriaCompleta = os.totalmem()

console.log(memoriaLibre);
console.log(memoriaCompleta);