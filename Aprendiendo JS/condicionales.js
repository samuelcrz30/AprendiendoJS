// RETO 1

let nota = 7;

if (nota < 5) {
    console.log('Suspendido');
} else if (nota >= 5 && nota < 9) {
    console.log('Aprobado');
} else {
    console.log('Sobresaliente')
}

// RETO 2

let edad = 19;
let tieneCarnet = true;

if (edad >= 18 && tieneCarnet){
    console.log('Puedes conducir')
} else {
    console.log('No puedes conducir')
}

// RETO 3

let usuario = 'admin';
let contraseña = 1234;

if (usuario === 'admin' && contraseña === 1234) {
    console.log('Acceso permitido')
} else {
    console.log('Acceso denegado')
}