function saludar(nombre, edad, genero) {
  const hora = new Date().getHours();
  let saludo = "";
  let titulo_de_cortesia = "";

  if(hora >= 6 && hora <= 11){
    saludo = "Buenos dias";
  } else if(hora >= 12 && hora <= 19){
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  if(edad > 30){
    if(genero === "m") titulo_de_cortesia = "Sr.";
    else titulo_de_cortesia = "Sra."
  }
  return `${saludo} ${titulo_de_cortesia} ${nombre}`.trim();
}

export default saludar;


