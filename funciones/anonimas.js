//funciones anònimas autoejecutables/IIFE(Immediately invoked function expression). Siempre llevan ;
(function () {
  return console.log('Anonymous, bruh');
})();

(() => {
return console.log('Anonymous, bruh... pero en arrow ;)');
})();

(function (a, b) {
  return console.log(a + b)
})(25, 27);

((a, b) => console.log(a + b))(5, 89);