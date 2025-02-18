const Variables2 = () => {
    const encabezado = (
        <header>
            <h1>Título</h1>
            <p>Home</p>
        </header>
    );
    const contenido = (
    <main>
        <h2>Otro título</h2>
        <p>Este es otro contenido</p>
    </main>
    );
    return (
        <>
            {encabezado}
            {contenido}
        </>
    )
}
export default Variables2;