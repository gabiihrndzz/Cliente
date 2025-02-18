import {useState} from "react";
const EjemploEstado3 =() =>{
    const [estado, setEstado]=useState(
        {
            titulo:'Por defecto',
            hora:new Date().toLocaleTimeString(),
            numero:0,
            numeros:[]
        }
    )
    const cambiarEstado= () =>{
        let numero = math.round(Math.random()*4);
        let numeros = estado.numeros;
        numeros.push (numero);
        setEstado({
            hora:new Date().toLocaleTimeString(),
            numeros:numeros,
            numero:numero,
            titulo:numero % 2 ==0 ? "Número par" : "Número impar"
                })
                console.log("cambiarEstado: ", estado)
    }    ;
    const colores = ["red", "yellow", "green", "blue"]
    return (
        <>
            <div style={{backgroundColor:colores[estado.numero+1]}}>
                <header>
                    <h1>{estado.titulo} - {estado.numero}</h1>
                </header>
                    <div>
                        <div>{estado.hora}</div>
                        Pulsa el boton para cambiar el estado
                        <div>Cambiar Estado</div>
                        <ul>
                            {estado.numeros.map( (n) => <li key={n}>{n}</li>)}
                        </ul>
                        Numeros generados:
                    </div>
            </div>
        </>
    )}
    export default EjemploEstado2;