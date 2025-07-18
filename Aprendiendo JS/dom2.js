// lista añadiendo elementos

let lista = document.getElementById("lista");
let boton = document.getElementById("añadir");
let counter = 0;
boton.addEventListener("click", () => {
  counter += 1;
  let elemento = document.createElement("li");
  elemento.textContent = `Nuevo elemento ${counter}`;
  if (counter % 3 === 0) {
    elemento.style.color = "green";
  }
  lista.appendChild(elemento);
});

// parrafo alternando color
let texto = document.getElementById("texto");
let boton2 = document.getElementById("cambiar");
boton2.addEventListener("click", () => {
  if (texto.style.color === "red") {
    texto.style.color = "blue";
  } else {
    texto.style.color = "red";
  }
});

//boton para añadir y quitar elementos
let contenedor = document.getElementById("contenedor");
let botonAñadir = document.getElementById("añadir-elemento");
let botonQuitar = document.getElementById("quitar-elemento");
let contador = document.createElement("p");
let counter2 = 0;
contador.textContent = `Contador: ${counter2}`;
contenedor.appendChild(contador);
botonAñadir.addEventListener("click", () => {
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Esto es un nuevo parrafo";
  if (contenedor.childElementCount <= 10) {
    contenedor.appendChild(nuevoParrafo);
    counter2 += 1;
    contador.textContent = `Contador: ${counter2}`;
  } else {
    alert("No se pueden añadir más elementos");
  }
});

botonQuitar.addEventListener("click", () => {
  let resultado = confirm("¿Estás seguros?");
  if (resultado) {
    contenedor.lastElementChild.remove();
    counter2 -= 1;
    contador.textContent = `Contador: ${counter2}`;
  }
});
