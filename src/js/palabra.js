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
/*     switch (event.key) {
    case a:
        
            break;
    
            case b:
            
                break;
    
                case c:
                    
            break;
    
        case d:
            
            break;
            
        case e:
            
            break;
    
            case f:
                
                break;
    
            case g:
                
                break;
            
            case h:
                
                break;
                
        case i:
            
            break;
    
            case j:
            
            break;
    
            case k:
            
            break;
    
            case l:
            
            break;
            
        case m:
            
            break;
            
            case n:
                
                break;
                
                case ñ:
                    
            break;
            
            case a:
            
            break;
    
            case a:
                
            break;
            
            case a:
                
                break;
                
                case a:
                    
                    break;
                    
                    case a:
                        
                        break;
                        
                        case a:
                            
                            break;
    
        case a:
            
            break;
    
        case a:
            
            break;
            
            case a:
                
                break;
                
                case a:
            
                    break;
                    
                    default:
                        break;
            } */
        
        
};

export {palabraSecreta};