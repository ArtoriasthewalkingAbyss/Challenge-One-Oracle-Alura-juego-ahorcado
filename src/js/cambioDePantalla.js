import { cancelar } from "./agregarPalabra.js";

const ahorcado = document.querySelector(".sec-ahorcado");
const inicio = document.querySelector(".sec-inicio-del-juego");
const agregar = document.querySelector(".sec-agregar-palabra");

function iniciarJuego() {
    inicio.style.display = "none";
    ahorcado.style.display = "flex";
}

function agregarPalabra() {
    inicio.style.display = "none";
    agregar.style.display = "flex";
    cancelar;
};

export {agregar, inicio, ahorcado, agregarPalabra, iniciarJuego}