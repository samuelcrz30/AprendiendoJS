let boton = document.getElementById("añadir");
let input = document.getElementById("entrada");
let lista = document.getElementById("tareas");

boton.addEventListener("click", () => {
  let valor = input.value;
  if (valor) {
    let elemento = document.createElement("li");
    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.style.width = "100px";
    botonBorrar.style.height = "20px";
    botonBorrar.style.marginLeft = "10px";
    elemento.textContent = `${valor}`;
    lista.appendChild(elemento);
    elemento.appendChild(botonBorrar);
    botonBorrar.addEventListener("click", () => {
      elemento.remove();
    });
  } else {
    alert("No puedes enviar vacío");
  }
  input.value = "";
});
