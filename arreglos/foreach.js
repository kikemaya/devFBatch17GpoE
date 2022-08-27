// recomendado para iteraciones simples, que no impliquen modificar el arreglo original
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(number => {
  console.log(number);
})