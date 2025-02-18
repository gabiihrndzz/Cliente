import {useEffect} from "react";
import {useRef} from "react";


const Rerenderizable = () => {
    const primeraVez = useRef(true);
    useEffect (() =>{primeraVez.current = false;})
    const style = {color : primeraVez.current ? "red" : "blue"}
    const text = primeraVez.current ? "Este es el primer renderizado" : "Este no es el primer renderizado";
    return <p style={style}>{text}</p>;
}

export default  Rerenderizable;