const Bucles = () => {
    const personajes = [
    {nombre: "Seong Gi-hun", edad: 52},
    {nombre: "Hwang Jun-ho", edad: 33},
    {nombre: "Hwang Front-man", edad: 54}
    ];
    return(
    <>
    <h1>Personajes</h1>
    <ul>
    {
    personajes.map((p) =>
    <li key={p.nombre}><b>{p.nombre}</b>: {p.edad} años</li>)
    }
    </ul>
    </>
    )
    };
    export default Bucles;