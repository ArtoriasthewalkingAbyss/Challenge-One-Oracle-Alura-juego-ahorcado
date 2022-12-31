

const canvas = document.querySelector(".canvas");

const horca = () => {

    // Obtén el contexto de dibujo del canvas
    let context = canvas.getContext('2d');

    // Establece el grosor de línea y el color
    context.lineWidth = 2;
    context.strokeStyle = 'black';

    // Dibuja la línea horizontal superior de la horca
    context.moveTo(120, 5);
    context.lineTo(155, 5);
    context.stroke();

    // Dibuja la línea vertical izquierda de la horca
    context.moveTo(121, 6);
    context.lineTo(121, 80);
    context.stroke();

    // Dibuja la línea horizontal inferior de la horca
    context.moveTo(105, 81);
    context.lineTo(170, 81);
    context.stroke();

    // Dibuja la línea vertical derecha de la horca
    context.moveTo(155, 4);
    context.lineTo(155, 17);
    context.stroke();
    
    
    // Dibuja la cabeza
    context.beginPath();
    context.arc(155, 23, 7, 0, Math.PI * 2, false);
    context.stroke();

    // Dibuja el tronco
    context.moveTo(155, 31);
    context.lineTo(155, 50);
    context.stroke();

    // Dibuja el brazo izquierdo
    context.moveTo(155, 35);
    context.lineTo(145, 45);
    context.stroke();

    // Dibuja el brazo derecho
    context.moveTo(155, 35);
    context.lineTo(165, 45);
    context.stroke();

    // Dibuja el pierna izquierdo
    context.moveTo(155, 50);
    context.lineTo(145, 61);
    context.stroke();

    // Dibuja el pierna derecho
    context.moveTo(155, 50);
    context.lineTo(165, 61);
    context.stroke();
};


export {horca, canvas};