import React, { useState } from 'react';

const Anadir = () => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre }),
    });

    if (response.ok) {
      setNombre('');
      alert('Usuario añadido');
    } else {
      alert('Error al añadir usuario');
    }
  };

  return (
    <div>
      <h2>Añadir Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default Anadir;
