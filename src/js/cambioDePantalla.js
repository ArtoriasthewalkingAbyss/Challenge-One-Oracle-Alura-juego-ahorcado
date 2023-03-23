import { dibujarGiones, horca, letras } from "./ahorcado.js";
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
    document.addEventListener("keydown", (event) => {// porque no funciona en otro modulo por ejeplo tener este evento en otrafucion en otro modulo llamar a la funcion y que registre los eventos
        console.log(event.key);
        let mayuscula = event.key.toUpperCase()
        let minuscula = event.key.toLowerCase()

        if (palabra.match(mayuscula) || palabra.match(minuscula)) {
            for (let i = 0; i < palabra.length; i++) {
                console.log("dentro del for");

                if (palabra[i] === mayuscula) {
                    console.log("coincide mayuscula");
                    
                    letras(palabra, mayuscula, i);
                } else if (palabra[i] === minuscula) {//no si hay una forma mejor de comprobar si es minucula y que dibuje lo que correspanda
                    console.log("coincide minucula");
                    
                    letras(palabra, minuscula, i);
                    
                }
                console.log("abajo de la coindicion del for");
            }
            console.log("fuera del for");
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


export {agregar, inicio, ahorcado};