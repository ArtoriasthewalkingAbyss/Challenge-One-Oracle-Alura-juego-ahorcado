import { horca, incorrecto, dibujarGiones, letras } from "./ahorcado.js";
import { palabraSecreta, validarTecla} from "./palabra.js";

const cambiarSec = (sacar, poner) => {
  sacar.style.display = "none";
  poner.style.display = "flex";
};

const iniciarJuego = () => {
  const palabra = palabraSecreta();
  let intentos = 0;
  const letrasPrecionadas = [];
  let letrasCorrectas = "";

  horca();
  dibujarGiones(palabra);
  document.addEventListener("keydown", (event) => {// porque no funciona en otro modulo por ejeplo tener este evento en otrafucion en otro modulo llamar a la funcion y que registre los eventos
    if (!letrasPrecionadas.includes(event.key) && event.key.length === 1 && /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/.test(event.key)) {
      let mayuscula = event.key.toUpperCase();
      let minuscula = event.key.toLowerCase();
      letrasPrecionadas.push(event.key);
      let tr = validarTecla(palabra, mayuscula, minuscula);
      if (tr) {
        for (let i = 0; i < palabra.length; i++) {
          if (palabra[i] === mayuscula) {
            letras(palabra, mayuscula, i, 460);
            letrasCorrectas = letrasCorrectas + mayuscula;
          } else if (palabra[i] === minuscula) {
            letras(palabra, minuscula, i, 460);
            letrasCorrectas = letrasCorrectas + minuscula;
          }
          /*no si hay una forma mejor de comprobar si es minucula y que dibuje lo que correspanda*/ 
        }
        if (letrasCorrectas.length === palabra.length) {
          alert("Ganaste");
        }
      } else {
        intentos++;
        letras(palabra, event.key , intentos, 300);
        incorrecto(intentos); 
      }
    }
  });
  
};

export {cambiarSec, iniciarJuego};