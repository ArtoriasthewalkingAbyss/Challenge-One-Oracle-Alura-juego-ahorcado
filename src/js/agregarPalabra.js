import { agregar, inicio } from "./cambioDePantalla";

function nuevaPalabra() {
    
}

function cancelar() {
    inicio.style.display = "flex";
    agregar.style.display = "none";
}

export {cancelar}