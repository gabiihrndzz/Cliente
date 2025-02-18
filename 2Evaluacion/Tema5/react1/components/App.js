import React from 'react';
import logo from './logo.svg';
// import './App.css'; 
import AcercaDe from './AcercaDe';
import Bucles from './Bucles';
import Variables from './Variables';

const App = () => {
    const usuario ={ nombre:'Juan Diego',
    edad:'55',
    color:'verde'};
    const saludoFn=()=> {alert('Lucy')};

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Saludar userInfo={usuario} saldarFn={saludarFn}/>
                <Saludar userInfo={usuario}/>
                {/* <Saludar nombre="Carmen" edad="24"/> */}
                <Saludar saludarFn={saludarFn}/>
            </header>
        </div>
    );
}

export default App;
