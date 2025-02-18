import React, { useState } from "react";
import './Visor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const Visor = (props) => {
    const [indiceActual, setIndiceActual] = useState(0);
    const imagenes = props.imagenes;

    const mostrarImagen = () => {
        const path = "/images/" + imagenes[indiceActual];
        const visorImagenes = document.getElementById("visorImagenes");
        if (visorImagenes) visorImagenes.src = path;
    };

    const siguiente = () => {
        setIndiceActual((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    const anterior = () => {
        setIndiceActual((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };

    const primera = () => {
        setIndiceActual(0);
    };

    const ultima = () => {
        setIndiceActual(imagenes.length - 1);
    };

    React.useEffect(() => {
        mostrarImagen();
    }, [indiceActual]);

    return (
        <div className="visor">
            <img id="visorImagenes" className="imagen" alt="Visor" />
            <br />
            <div className="botones">
                <button onClick={siguiente}><FontAwesomeIcon icon={faPlay} /></button>
                <button onClick={ultima}><FontAwesomeIcon icon={faForward} /></button>
                <button onClick={anterior}><FontAwesomeIcon icon={faPlay} className="flip-horizontal" /></button>
                <button onClick={primera}><FontAwesomeIcon icon={faBackward} /></button>
            </div>
        </div>
    );
};

export default Visor;
