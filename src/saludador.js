function saludar() {
  const nombre = document.getElementById("nombre").value;
  const hora = new Date().getHours();
  let saludo = "";

  if(hora < 12){
    saludo = "Buenos dias";
  } else if(hora < 18){
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  document.getElementById("resultado").textContent = saludo + " " + nombre;

}


