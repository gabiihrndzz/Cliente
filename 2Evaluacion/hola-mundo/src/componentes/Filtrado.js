import { useState } from "react";
const Filtrado = () => {
const [busqueda, setBusqueda] = useState("");
const usuarios = [
{ id: 1, nombre: "Cassandra Smith" },
{ id: 2, nombre: "Ryan Curtis" },
{ id: 3, nombre: "Dean Walker" },
];
// Se crea una expresión regular desde la búsqueda
const regex = new RegExp(busqueda, "i");
// Se filtra la lista de usuarios
const usuariosFiltrados = usuarios.filter((usuario) =>
regex.test(usuario.nombre)
);
return (
<>
<input type="text" placeholder="Buscar usuario..." value={busqueda}
onChange={(e) => setBusqueda(e.target.value)} />
<ul>
{usuariosFiltrados.map((usuario) => (
<li key={usuario.id}>{usuario.nombre}</li>
))}
</ul>
</>
);
};
export default Filtrado;