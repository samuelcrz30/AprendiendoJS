// BUCLES 2

// Usa un solo bucle y almacena los resultados en dos arrays separados (pares e impares). Del 1 al 100

/////// FUNCTION RANGE PARA SIMULAR PYTHON
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
///////

let numeros_totales = range(1, 100);
let numeros_pares = [];
let numeros_impares = [];

for (num of numeros_totales) {
  if (num % 2 == 0) {
    numeros_pares.push(num);
  } else {
    numeros_impares.push(num);
  }
}

console.log(numeros_pares);
console.log(numeros_impares);

// SUMA ACUMULADA

let n = 5;
let resultado = 0;
let numbers = range(1, n);
for (num of numbers) {
  resultado += num;
}
console.log(resultado);

// Array cuadrados

let cuadrados = [];
let N = 4;
let numbers2 = range(1, N);
for (num of numbers2) {
  cuadrados.push(num ** 2);
}

console.log(cuadrados);

// Tablas de multiplicar

table = range(1, 10);
for (num of table) {
  for (num2 of table) {
    console.log(`${num} x ${num2} = ${num * num2}`);
  }
}

// Cuenta regresiva

let top = 50;
while (top != 0) {
  if (top === 25) {
    console.log("25: MITAD ALCANZADA");
  } else {
    console.log(top);
  }
  top -= 5;
}
