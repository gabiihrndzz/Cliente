const Saludar = (props) => (
    <>
    <h2>
    Hola, {props.nombre}, me he enterado de que tiene{" "}
    {props.edad} años y de que su color favorito es el{" "}
    {props.color}
    </h2>
    </>
    );
 
    export default Saludar;