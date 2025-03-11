import React, { useState } from "react";

const FiltradoCanciones = ({ canciones }) => {
  const [filtro, setFiltro] = useState("");

  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.artista?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por artista..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {cancionesFiltradas.map((cancion) => (
          <li key={cancion.id}>{cancion.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltradoCanciones;
