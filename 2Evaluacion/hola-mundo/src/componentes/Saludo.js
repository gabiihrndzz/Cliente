import PropTypes from "prop-types";
const Saludo = ({nombre}) => <p> Hola, {nombre}</p>

Saludo.propTypes = {
    nombre: PropTypes.string.isRequired
}
export default Saludo;