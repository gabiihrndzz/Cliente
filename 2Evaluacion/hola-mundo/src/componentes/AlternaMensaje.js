import estilos from './AlternaMesaje.module.css'
import { useState } from 'react'
const AlternaMensaje = () =>{
    const [esVisible, setEsVisible] = useState(true);
    const AlternaVisibilidad = () => {
        setEsVisible (!esVisible);
    }
    return (
        <>
            <h2>Alterna Mensaje</h2>
            <button onClick={AlternaVisibilidad}>
                {
                    esVisible ? "Esconde mensaje feli feli" : "Muestra mensaje"
                }
            </button>
            <p className={esVisible ? estilos.mensaje : estilos.oculto}>
            eu cashorru feli feli eu cashorru feli feli debi tirar mas fotos de cuando te tuve
            </p>
        </>
    ) 
}

export default AlternaMensaje;