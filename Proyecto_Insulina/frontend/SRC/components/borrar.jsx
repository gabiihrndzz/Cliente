import React, { useState } from 'react';

const Borrar = () => {
  const [idUsuario, setIdUsuario] = useState('');

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8080`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Usuario borrado');
    } else {
      alert('Error al borrar usuario');
    }
  };

  return (
    <div>
      <h2>Borrar Usuario</h2>
      <input
        type="text"
        value={idUsuario}
        onChange={(e) => setIdUsuario(e.target.value)}
        placeholder="ID de Usuario"
        required
      />
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default Borrar;
