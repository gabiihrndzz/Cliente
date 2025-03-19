import React, { useState } from 'react';

const Modificar = () => {
  const [idUsuario, setIdUsuario] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');

  const handleModify = async () => {
    const response = await fetch(`http://localhost:8080`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre: nuevoNombre }),
    });

    if (response.ok) {
      alert('Usuario modificado');
    } else {
      alert('Error al modificar usuario');
    }
  };

  return (
    <div>
      <h2>Modificar Usuario</h2>
      <input
        type="text"
        value={idUsuario}
        onChange={(e) => setIdUsuario(e.target.value)}
        placeholder="ID de Usuario"
        required
      />
      <input
        type="text"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
        placeholder="Nuevo Nombre"
        required
      />
      <button onClick={handleModify}>Modificar</button>
    </div>
  );
};

export default Modificar;
