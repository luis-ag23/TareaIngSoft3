import saludar from "./saludador.js";

const form = document.querySelector("#saludo-form");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const generoSelect = document.querySelector("#genero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) =>{
  event.preventDefault();

   const nombre = nombreInput.value;
   const edad = Number.parseInt(edadInput.value);
   const genero = generoSelect.value;

   const mensaje = saludar(nombre,edad,genero)
   div.innerHTML = "<p>" + mensaje + "</p>";

});