const path = require('path')

console.log(__filename);
console.log(__dirname);

const miArchivo = path.parse(__filename)
console.log(miArchivo.ext);