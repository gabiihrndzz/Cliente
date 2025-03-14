import React from 'react';

const FiltradoCorredores = ({ setFiltro }) => {
    return (
        <input
            type="text"
            placeholder="Filtrado por nacionaliadad (en inglés)"
            onChange={(e) => setFiltro(e.target.value)} // Actualiza el estado del filtro cuando el usuario escribe
        />
    );
};

export default FiltradoCorredores;
