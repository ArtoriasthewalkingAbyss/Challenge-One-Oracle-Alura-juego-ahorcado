import { iniciarJuego, cambiarSec } from "./src/js/cambioDePantalla.js";
import { nuevaPalabra } from "./src/js/palabra.js";

const inicio = document.querySelector(".sec-inicio-del-juego");
const ahorcado = document.querySelector(".sec-ahorcado");
const agregar = document.querySelector(".sec-agregar-palabra");
const btnInicio = document.querySelector(".btn-iniciar-juego");
const btnAgregar = document.querySelector(".btn-agregar-nueva-palabra");
const btnNuevoJuego = document.querySelector(".btn-nuevo-juego");
const btnDesistir = document.querySelector(".btn-desistir");
const btnGuardar = document.querySelector(".btn-guardar-empezar");
const btnCancelar = document.querySelector(".btn-cancelar");

btnInicio.addEventListener("click", () => {
  cambiarSec(inicio, ahorcado);
  iniciarJuego();
});

btnAgregar.addEventListener("click", () => {
  cambiarSec(inicio, agregar);
});

btnNuevoJuego.addEventListener("click", () => {
  location.reload();
});

btnDesistir.addEventListener("click", () => {
  location.reload();
});

btnGuardar.addEventListener("click", () => {
  nuevaPalabra();
  cambiarSec(agregar, ahorcado);
  iniciarJuego();
});

btnCancelar.addEventListener("click", () => {
  cambiarSec(agregar, inicio);
});