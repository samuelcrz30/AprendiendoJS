let boton = document.getElementById("enviar");
let input = document.getElementById("entrada");
let lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  let valor = input.value;
  if (valor) {
    let elemento = document.createElement("li");
    elemento.textContent = `${valor}`;
    lista.appendChild(elemento);
  } else {
    alert("No puedes enviar vacío");
  }
  input.value = "";
});
