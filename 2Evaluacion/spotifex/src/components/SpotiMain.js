import React, { useState, useEffect } from "react";
import ListadoCanciones from "./ListadoCanciones";
import FiltradoCanciones from "./FiltradoCanciones";
import MasPopular from "./MasPopular";

const SpotiMain = () => {
  const [canciones, setCanciones] = useState([]);
  const [error, setError] = useState(null); // Estado para el manejo del error

  useEffect(() => {
    const fetchCanciones = async () => {
      try {
        const response = await fetch("/json/Spotify.json");
        const data = await response.json();
        console.log(data); // Verifica los datos cargados
        setCanciones(data);
      } catch (error) {
        setError("Error al cargar canciones. Intenta más tarde."); // Guardar el mensaje de error
      }
    };
    fetchCanciones();
  }, []);

  return (
    <div>
      <h1>SpotifEx</h1>
      
      {/* Mostrar el error en el DOM si ocurre */}
      {error && <div className="error-message">{error}</div>}
      
      <FiltradoCanciones canciones={canciones} />
      <ListadoCanciones canciones={canciones} />
      <MasPopular canciones={canciones} />
    </div>
  );
};

export default SpotiMain;
