// ES PAR

const esPar = (numero) => {
  if (numero % 2 === 0) {
    console.log("Es par");
    return true;
  } else {
    console.log("No es par");
    return false;
  }
};

console.log(esPar(20));

// AREA RECTANGULO

const areaRectangulo = (base, altura) => {
  return base * altura;
};

// NUMEROS MAYORES DE 10

const numsMayoresDe10 = (lista) => {
  let newLista = [];
  for (num of lista) {
    if (num > 10) {
      newLista.push(num);
    }
  }
  return newLista;
};

console.log(numsMayoresDe10([3, 7, 12, 20, 2, 11]));
