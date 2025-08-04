let input = document.getElementById("entrada");
let boton = document.getElementById("eliminar");
let lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  let valor = input.value;
  let items = document.querySelectorAll("li");
  for (let item of items) {
    if (item.textContent === valor) {
      item.remove();
    }
  }
});
