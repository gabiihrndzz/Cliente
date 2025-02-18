const Saludar = (props) => {
    return(
    <>
        <button onClick={props.saludarFn(userInfo.props.nombre)}>Si me pinchas ¿no sangro?</button>
        {/* <button onClick={props.saludarFn}>Si me pinchas ¿no sangro?</button> */}
        {/* <h2>Hola, me he enterado que te llamas {userInfo.props.nombre}  tienes {userInfo.props.edad} años y tu color favorito es el {userInfo.props.color}</h2> */}
    </>      
    )
};
export default Saludar;