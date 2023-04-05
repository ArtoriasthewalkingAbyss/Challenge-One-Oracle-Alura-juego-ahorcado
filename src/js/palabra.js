import { palabras } from "./db.js";

const palabraSecreta = () => {
  const numeroDePalabras = palabras.length;
  const generadorAleatorio = () => Math.floor(Math.random() * numeroDePalabras);
    
  let palabraAleatoria = palabras[generadorAleatorio()];
  console.log(palabraAleatoria);

  return palabraAleatoria;
};

const validarTecla = (palabra, mayuscula, minuscula) => {
  if (palabra.match(mayuscula) || palabra.match(minuscula)) {
    
    return true;
  } else {
    return false;
  }
};

function nuevaPalabra() {
  let valor = document.querySelector(".texta-agregar-palabra").value;
  console.log(valor);
  palabras.push(valor);
}

export {palabraSecreta, validarTecla, nuevaPalabra};