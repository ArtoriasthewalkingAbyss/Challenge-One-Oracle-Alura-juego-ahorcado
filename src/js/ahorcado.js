/* eslint-disable indent */


let canvas = document.querySelector(".canvas");
let context = canvas.getContext("2d");
const horca = () => {
    
  // Obtén el contexto de dibujo del canvas
    
  // Establece el grosor de línea y el color
  context.lineWidth = 6;
  context.strokeStyle = "black";
    
  // Dibuja la línea horizontal superior de la horca
  context.moveTo(550, 10);
  context.lineTo(710, 10);
  context.stroke();
    
  // Dibuja la línea vertical izquierda de la horca
  context.moveTo(550, 11);
  context.lineTo(550, 250);
  context.stroke();

  // Dibuja la línea horizontal inferior de la horca
  context.moveTo(435, 250);
  context.lineTo(665, 250);
  context.stroke();
    
  // Dibuja la línea vertical derecha de la horca
  context.moveTo(710, 10);
  context.lineTo(710, 50);
  context.stroke();
};

function dibujarGiones(palabra) {
  context.lineWidth = 2;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.fillStyle = "#F3F5F6";
  context.strokeStyle = "#0A3871";

  const ancho = 1100/palabra.length;
  for (let i = 0; i < palabra.length; i++){
        
    context.moveTo(100 + (ancho * i), 470);
    context.lineTo(150 + (ancho * i), 470);
  }
  context.stroke();
  context.closePath();
}

function letras(palabra, letra, i, altura) {
  //console.log("funcion letras");
  context.font = "bold 30px Arial";
  context.fillStyle = "#000";
  let ancho= 1100/palabra.length;
  //console.log(palabra[i]);
  context.fillText(letra,115+(ancho*i), altura);
}

function incorrecto(intento) {


  // Configura el estilo de la línea para dibujar
  context.lineWidth = 3;
  context.strokeStyle = "black";

  // Dibuja una parte del cuerpo del ahorcado en función del número de intentos
  switch (intento) {
    case 1: // Dibujar la cabeza
      context.beginPath();
      context.arc(710, 75, 20, 0, Math.PI * 2, false);
      context.stroke();
      break;
      
    case 2: // Dibujar el torso
    // Dibuja el tronco
      context.moveTo(710, 100);
      context.lineTo(710, 140);
      context.stroke();
      break;
      
    case 3: // Dibujar el brazo izquierdo
    // Dibuja el brazo izquierdo
      context.moveTo(710, 110);
      context.lineTo(690, 140);
      context.stroke();
      break;
      
    case 4: // Dibujar el brazo derecho
    // Dibuja el brazo derecho
      context.moveTo(710, 110);
      context.lineTo(730, 140);
      context.stroke();
      break;

    case 5: // Dibujar la pierna izquierda
    // Dibuja el pierna izquierdo
      context.moveTo(710, 140);
      context.lineTo(690, 180);
      context.stroke();
      break;
      
    case 6: // Dibujar la pierna derecha y finalizar el juego
      context.moveTo(710, 140);
      context.lineTo(730, 180);
      context.stroke();
      break;

    case 7:
      alert("Has perdido el juego");
  }
}

const limpiarCanvas = () => {//por ahora no se usa
  context.clearRect(0, 0, canvas.width, canvas.height);
};


export {horca, canvas, dibujarGiones, letras, incorrecto, limpiarCanvas};