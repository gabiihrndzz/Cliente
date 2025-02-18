import './Visor.css'
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'
const Visor = (props) =>
{
    let indiceActual = 0;
    const imagenes = props.imagenes;
    const mostrarImagen  =() => {
        const path = "/images/" + props.imagenes [indiceActual];
        const visorImagenes = document.getElementById('visorImagenes');
        if (visorImagenes)
        visorImagenes.src=path;
    }
    const siguiente = () =>{
        indiceActual++;
        if ( indiceActual=== imagenes.length) indiceActual=0;
        mostrarImagen();
    }
    const anterior = () =>{
        indiceActual--;
        if ( indiceActual === -1) indiceActual=imagenes-length-1;
        mostrarImagen();
    }

    const ultima = () =>{
        indiceActual=imagenes.length-1;
        mostrarImagen();
    }

    return(
        <div className="Visor"></div>
    )
}
export default Visor;