import { agregar, inicio } from "./cambioDePantalla.js";

function nuevaPalabra() {
    
}

function cancelar() {
    inicio.style.display = "flex";
    agregar.style.display = "none";
}

export {cancelar}