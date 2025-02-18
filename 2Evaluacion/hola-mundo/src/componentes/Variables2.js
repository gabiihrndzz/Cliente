const Variables2 = () => {
    const encabezado = (
        <header>
<h1>Titulo</h1>
<p>Home</p>
        </header>
    )
    const contenido = (
        <main>
<h2>Este es otro titulo</h2>
<p>Esto es otro contenido</p>
        </main>
    )

    return(
        <>
        {encabezado}
        {contenido}
        </>
    )
}

export default Variables2;
