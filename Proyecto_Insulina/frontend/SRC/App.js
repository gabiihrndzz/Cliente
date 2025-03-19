import React, { useState } from 'react';
import Anadir from './components/anadir';    // Asegúrate de que las rutas sean correctas
import Borrar from './components/borrar';
import Consultar from './components/consultar';
import Modificar from './components/modificar';

const App = () => {
  const [currentView, setCurrentView] = useState('consultar');

  const renderView = () => {
    switch (currentView) {
      case 'anadir':
        return <Anadir />;
      case 'borrar':
        return <Borrar />;
      case 'consultar':
        return <Consultar />;
      case 'modificar':
        return <Modificar />;
      default:
        return <Consultar />;
    }
  };

  return (
    <div>
      <h1>Aplicación de Usuarios</h1>
      <nav>
        <button onClick={() => setCurrentView('consultar')}>Consultar</button>
        <button onClick={() => setCurrentView('anadir')}>Añadir</button>
        <button onClick={() => setCurrentView('modificar')}>Modificar</button>
        <button onClick={() => setCurrentView('borrar')}>Borrar</button>
      </nav>
      <div>
        {renderView()}
      </div>
    </div>
  );
};

export default App;
