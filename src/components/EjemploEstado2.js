import {useState} from "react";
const EjemploEstado2 =() =>{
    const [estado, setEstado]=useState(
        {
            nombre:'BeetleJuice',
            datos:[]
        }
    );
    return (
        <>
            <header>
                <h1>{estado.nombre}</h1>
                <button onClick={() => setEstado ({...estado,nombre:'Bob'})}></button>
            </header>
        </>
    )}
    export default EjemploEstado2;