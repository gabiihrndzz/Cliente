import React, { useState, useEffect } from 'react';

const Consultar = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`http://localhost:8080`);
      const data = await response.json();
      setUsuarios(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Consultar;
