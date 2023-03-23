import { dibujarGiones } from "./ahorcado.js";
import { ahorcado } from "./cambioDePantalla.js";
import { palabras } from "./db.js";

const palabraSecreta = () => {

    const letrasPresionadas = [];
    
    const numeroDePalabras = palabras.length;
    const generadorAleatorio = () => Math.floor(Math.random() * numeroDePalabras);
    
    const palabraAleatoria = palabras[generadorAleatorio()];
    
    dibujarGiones(palabraAleatoria);

    return palabraAleatoria
};

export {palabraSecreta};