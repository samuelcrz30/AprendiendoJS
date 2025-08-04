let boton = document.getElementById("cambiar");
let boton2 = document.getElementById("cambiar2");
let lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  let items = lista.querySelectorAll("li");
  for (let item of items) {
    item.classList.add("resaltado");
  }
});

boton2.addEventListener("click", () => {
  let items = lista.querySelectorAll("li");
  for (let item of items) {
    item.classList.remove("resaltado");
  }
});
