import { dibujarGiones, horca } from "./ahorcado.js";
import { palabraSecreta } from "./palabra.js";

const ahorcado = document.querySelector(".sec-ahorcado");
const inicio = document.querySelector(".sec-inicio-del-juego");
const agregar = document.querySelector(".sec-agregar-palabra");
const btnInicio = document.querySelector(".btn-iniciar-juego");
const btnAgregar = document.querySelector(".btn-agregar-nueva-palabra");
const btnReinicio = document.querySelector(".btn-nuevo-juego");
const btnDesistir = document.querySelector(".btn-desistir");
const btnGuardar = document.querySelector(".btn-guardar-empezar");
const btnCancelar = document.querySelector(".btn-cancelar");

btnInicio.addEventListener("click", () => {
    inicio.style.display = "none";
    ahorcado.style.display = "flex";
    let palabra = palabraSecreta();
    console.log(palabra);
    horca();
    ahorcado.addEventListener("keypress", (event) => {
        console.log("nya")
        if (palabra.match(event.key)) {
        console.log("holi");
        console.log(palabra.match(event.key));
        } else {
            console.log("nop");
            
        }
        console.log("adios");
    })

});


btnAgregar.addEventListener("click", () => {
    inicio.style.display = "none";
    agregar.style.display = "flex";
});

btnReinicio.addEventListener("click", () => {

});

btnDesistir.addEventListener("click", () => {
    inicio.style.display = "flex";
    ahorcado.style.display = "none";
});

btnGuardar.addEventListener("click", () => {

});

btnCancelar.addEventListener("click", () => {
    inicio.style.display = "flex";
    agregar.style.display = "none";
});


/*.addEventListener("click", () => {

});*/
export {agregar, inicio, ahorcado};