import {Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="home">
            <h1>Bienvenido</h1>
            <Link to="/pagina1">Entrar</Link>
        </section>
    )
}

export default Home;