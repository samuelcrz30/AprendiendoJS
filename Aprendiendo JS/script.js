// titulo

let title = document.getElementById("titulo");
title.textContent = "Título cambiado desde JS";

// parrafo color

let parrafo = document.getElementById("parrafo");
parrafo.style.color = "blue";
parrafo.style.fontSize = "18px";

// evento click

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  parrafo.textContent = "Texto cambiado al hacer clic";
});

// evento click avanzado

let counter = 0;
let contenedor = document.getElementById("contenedor");

boton.addEventListener("click", () => {
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = `Nuevo elemento ${(counter += 1)}`;
  if (counter % 2 === 0) {
    nuevoParrafo.style.color = "red";
  } else {
    nuevoParrafo.style.color = "blue";
  }
  contenedor.appendChild(nuevoParrafo);
});
