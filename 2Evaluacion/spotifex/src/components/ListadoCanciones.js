import React from "react";

const ListadoCanciones = ({ canciones }) => {
  if (!canciones || canciones.length === 0) {
    return <p>No hay canciones para mostrar</p>; // Muestra un mensaje si no hay canciones
  }

  // Ordenar las canciones por popularidad
  const cancionesOrdenadas = [...canciones].sort((a, b) => b.track_popularity - a.track_popularity);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>Fecha de Lanzamiento</th>
          <th>Popularidad</th>
          <th>Duración (ms)</th>
        </tr>
      </thead>
      <tbody>
        {cancionesOrdenadas.map((cancion, index) => (
          <tr key={cancion.track_id || index}>
            <td>{cancion.track_id}</td>
            <td>{cancion.track_name}</td>
            <td>{cancion.track_artist}</td>
            <td>{cancion.track_album_name}</td>
            <td>{cancion.track_album_release_date}</td>
            <td>{cancion.track_popularity}</td>
            <td>{cancion.duration_ms}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListadoCanciones;
