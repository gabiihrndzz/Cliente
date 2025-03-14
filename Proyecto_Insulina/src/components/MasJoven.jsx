import React from 'react';

const MasJoven = ({ pilotos }) => {
    // Si no hay pilotos, no mostramos nada
    if (pilotos.length === 0) return null;

    // Buscamos la canción con mayor popularidad
    const MasJoven = pilotos.reduce(
        (max, piloto) => (piloto.dob > max.dob ? piloto : max),
        pilotos[0]
    );

    return (
        <div>
            <h2>Piloto más Joven</h2>
            <p>{MasJoven.forename} - {MasJoven.surname} (Fecha de Nacimiento: {MasJoven.dob})</p>
        </div>
    );
};

export default MasJoven;