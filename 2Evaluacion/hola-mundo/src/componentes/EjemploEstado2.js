import { useState } from "react";
import EjemploEstado from "./EjemploEstado";

const [estado, setEstado] = useState({
nombre: "Beetlejuice",
datos: [],
});
return (
<>
<header>
<h1>{estado.nombre}</h1>
</header>
<button onClick={ () => setEstado({...estado, nombr:"Bob"})}>Pulsa</button>
</>
);
export default EjemploEstado2;
