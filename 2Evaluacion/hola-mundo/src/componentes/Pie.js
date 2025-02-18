import { useContext } from "react";
import { AppContext } from "../AppContext";
const Pie = () => {
const contexto = useContext(AppContext)
return(
<footer>
<small>Este es el pie de página {contexto.titulo}</small>
</footer>
)
}
export default Pie;