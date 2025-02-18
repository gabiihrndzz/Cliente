import React, { useState } from "react";
    const FormControlado = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
        const cambioEntrada = (event) => {
        if (event.target.type === "text") setNombre(event.target.value);
        else if (event.target.type === "email") setEmail(event.target.value);
        };
        const envioForm = (event) => {
        event.preventDefault();
        alert(`Se ha enviado el formulario con el nombre ${nombre} y correo electrónico
        ${email}`);};
        return (
            <form onSubmit={envioForm}>
                <label>
                Nombre:
                <input type="text" value={nombre} onChange={cambioEntrada} />
                </label>
                <label>
                Correo electrónico:
                <input type="email" value={email} onChange={cambioEntrada} />
                </label>
            <button type="submit">Enviar datos</button>
            </form>
        );
    };
export default FormControlado;