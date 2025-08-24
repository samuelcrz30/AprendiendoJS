// boton, input y lista (visualmente)

let boton = document.getElementById("añadir");
let input = document.getElementById("entrada");
let lista = document.getElementById("tareas");

// array para almacenar las tareas y poder recuperarlo al recargar la página
let tareas = JSON.parse(localStorage.getItem("misTareas")) || [];

// si hay tareas guardadas de haber recargado la página , se vuelven a añadir
for (let tarea of tareas) {
  let elemento = document.createElement("li");
  let botonBorrar = document.createElement("button"); // boton de borrar al lado de cada tarea

  botonBorrar.textContent = "Borrar";
  botonBorrar.style.width = "100px";
  botonBorrar.style.height = "20px";
  botonBorrar.style.marginLeft = "10px";

  elemento.textContent = `${tarea}`;
  lista.appendChild(elemento);
  elemento.appendChild(botonBorrar);
  botonBorrar.addEventListener("click", () => {
    elemento.remove();
    tareas = tareas.filter((t) => t !== tarea);
    localStorage.setItem("misTareas", JSON.stringify(tareas));
  });
}

// si hay un valor en el input, se añade a la lista, si no , se avisa de que no puede estar vacío
boton.addEventListener("click", () => {
  let elemento = document.createElement("li");
  let botonBorrar = document.createElement("button");

  botonBorrar.textContent = "Borrar";
  botonBorrar.style.width = "100px";
  botonBorrar.style.height = "20px";
  botonBorrar.style.marginLeft = "10px";

  let valor = input.value;
  if (valor) {
    tareas.push(valor);
    localStorage.setItem("misTareas", JSON.stringify(tareas));
    elemento.textContent = `${valor}`;
    lista.appendChild(elemento);
    elemento.appendChild(botonBorrar);
    botonBorrar.addEventListener("click", () => {
      elemento.remove();
      tareas = tareas.filter((t) => t !== valor);
      localStorage.setItem("misTareas", JSON.stringify(tareas));
    });
  } else {
    alert("No puedes enviar vacío");
  }
  input.value = "";
});

