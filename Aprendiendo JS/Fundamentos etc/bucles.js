// for (inicialización; condición; actualización) {

// RETO 1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log("=======");

// RETO 2
let i = 100;
while (i > 0) {
  console.log(i);
  i -= 10;
}

// RETO 3
let nombres = ["Ana", "Luis", "Carlos", "Sara"];
for (let nombre of nombres) {
  console.log(`Hola ${nombre}`);
}

console.log("========");

// RETO 4
let number = 1;
while (number != 21) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
  number++;
}
