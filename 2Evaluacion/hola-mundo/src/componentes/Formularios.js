// const Formulario = () => {
//     const manejaClick = (e) =>{
//         console.log('boton pulsado : ', e)
//     }
//     return (

//     <>
//         <button onClick={manejaClick}>Click aqui</button>
//     </> )

// }
// export default Formulario;

const Formularios = () => {
    const manejaSubmit = (e) =>{
        console.log('Formulario enviado: ')
    }
    return (
    <form>
        <button onClick={manejaSubmit}>Enviar</button>
    </form>
    )
}
export default Formularios;