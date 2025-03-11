import React from "react";

const MasPopular = ({ canciones }) => {
  if (canciones.length === 0) return <p>No hay canciones disponibles</p>;

  const masPopular = canciones.reduce((prev, current) =>
    prev.popularidad > current.popularidad ? prev : current
  );

  return (
    <div>
      <h2>Canción más popular</h2>
      <p>{masPopular.nombre} - {masPopular.artista}</p>
    </div>
  );
};

export default MasPopular;
