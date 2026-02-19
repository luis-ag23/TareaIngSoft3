function saludar() {
  const nombre = document.getElementById("nombre").value;
  const genero = document.getElementById("genero").value;
  const hora = new Date().getHours();
  let saludo = "";
  let titulo_de_cortesia = "";

  if(hora < 12){
    saludo = "Buenos dias";
  } else if(hora < 18){
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  if(genero === "m") titulo_de_cortesia = "Sr.";
  else titulo_de_cortesia = "Sra."
  document.getElementById("resultado").textContent = saludo + " " + titulo + " " + nombre;

}


