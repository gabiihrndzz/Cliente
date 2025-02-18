// import logo from './logo.svg';
// import './App.css';
// import Acercade from './componentes/Acercade';

// function App() {
//   const nombre = 'Marina Gonzalez';
//   const elemento = <h1>Hola, {nombre}</h1>;

//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <h1>Hola, {nombre}</h1>
//       </header>
//       <Acercade/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Acercade from './componentes/Acercade';
import Variables2 from './componentes/Variables2';
import { AdiosMundo } from './componentes/AdiosMundo';
import Bucles from './componentes/Bucles';
import Saludar from './componentes/Saludar';
import EjemploEstado from './componentes/EjemploEstado';
import EjemploEstado3 from './componentes/EjemploEstado3';
import Visor from './componentes/Visor';
import Rerenderizable from './componentes/Rerenderizable';
import RerenderizadorSinCambioProps from './componentes/RerenderizadorSinCambioProps';
import NoRerenderizadorConCambioProps from './componentes/NoRerenderizadorConCambioProps';
import MiComponente from './componentes/miComponente';
//import AlternaMensaje from './componentes/AlternaMensaje';
import Pie from './componentes/Pie';
import Encabezado from './componentes/Encabezado';
import Saludo from './componentes/Saludo';
import Formularios from './componentes/Formularios';
import { AppContext, valoresDefecto } from './AppContext';
import { divide } from 'lodash';
import FormControlado from './componentes/FormControlado';

function App() {
  // Array de rutas de las imágenes
  // const imageArray = [
  //   './img/pinguino.jpg',
  //   './img/sol.jpg',
  //   './img/pinguino4.jpg'
  // ];

  // const imagenesSrc = new Array(
  //   "imagen1.png",
  //   "imagen2.png",
  //   "imagen3.png",
  //   "imagen4.png",
  //   "imagen5.jpg",
  //   "imagen6.jpg",
  //   "imagen7.webp"
  //   );
    

  // const [currentindex, setcurrentindex] = useState(0);

  // Show next image (with proper increment)
  // const shownextimage = () => {
  //   setcurrentindex((previndex) => (previndex + 1) % imageArray.length);
  // };

  // Show previous image (with proper decrement)
  // const showpreviousimage = () => {
  //   setcurrentindex((previous) => (previous === 0 ? imageArray.length - 1 : previous - 1));
  // };

  // return (
  //   <div className="App">
      
  //     <h1>Galería de Imágenes</h1>
  //     <div className="image-gallery">
  //       <img
  //         src={imageArray[currentindex]}
  //         alt={`img-${currentindex}`}
  //         style={{ maxWidth: '300px', margin: '20px 0' }}
  //       />
  //       <div>
  //         <button onClick={showpreviousimage} style={{ marginRight: '10px' }}>
  //           Anterior
  //         </button>
  //         <button onClick={shownextimage}>Siguiente</button>
  //       </div>
  //     </div>
  //   <Saludar nombre="Juan" edad="26" color="azul">
  //   </Saludar>

  //   <EjemploEstado3></EjemploEstado3>
  //   </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <Visor imagenes={imagenesSrc}
    //   </header>
    // </div>
  

//   return (
//     <div className="App">
//     <header className="App-header">
//     <Visor imagenes={imagenesSrc} />
//     </header>
//     </div>
//     );
    
// }

// function App1(){
// const [count, setCount] =useState(0);

// return (
//     <div style={{textAlign:"center", marginTop:"20px"}}>
//         <button onClick={() => setCount (count+1)} >incremento</button>
//         <span style={{marginLeft:"10px"}} >{count}</span>
//     </div>
// );

// }

// function AppParImpar(){
// const esPar = (numero) => {
//   return numero%2 === 0;
// };

// const numero = 4;
// return(
// <div style={styles.container}>
// <h1 style= {styles.heading}>¿El numero es par o impar?</h1>
// <p  style={styles.result}>
//   El numero <strong>{numero}</strong> es{" "}
//   {esPar(numero) ? <span style={styles.par}>Par</span>:
//   <span style={styles.impar}>Impar</span>}
//   </p>
// </div>
// );
// }
// const styles = {
//   container:{
//    textAlign:"center",
//    marginTop:"50px",
//    fontFamily:"Arial, San-Serif"

//   },

//   heading:{
//     fontSize:"24px",
//     color: "#333",
//   },

//   result:{
//     fontSize:"20px",
//     color: "#535",
//   },

//   par:{
//     color:"green",
//     fontWeight: "bold",
//   },

//   impar:{
//     color:"red",
//     fontWeight: "bold",
//   },
// };

// const imagenesSrc = [
//   "images/imagen1.png",
//   "images/imagen2.png",
//   "images/imagen3.png",
//   "images/imagen4.png",
//   "images/imagen5.png",
//   "images/imagen6.png",
//   "images/imagen5.png"
// ];

// const [currentindex, setcurrentindex] = useState(0);

// // Mostrar siguiente imagen
// const shownextimage = () => {
//   setcurrentindex((previndex) => (previndex + 1) % imagenesSrc.length);
// };

// // Mostrar imagen anterior
// const showpreviousimage = () => {
//   setcurrentindex((previous) => (previous === 0 ? imagenesSrc.length - 1 : previous - 1));
// };

// return (
//   <div className="App">
//     <h1>Galería de Imágenes</h1>
//     <div className="image-gallery">
//       <img
//         src={imagenesSrc[currentindex]}
//         alt={`img-${currentindex}`}
//         style={{ maxWidth: '300px', margin: '20px 0' }}
//       />
//       <div>
//         <button onClick={showpreviousimage} style={{ marginRight: '10px' }}>
//           Anterior
//         </button>
//         <button onClick={shownextimage}>Siguiente</button>
//       </div>
//     </div>

//     <Visor imagenes={imagenesSrc} />
//   </div>
// );

  
// return (
//   <main>
//     <>
//       <h4>Re-renderizado sin cambiar las propiedades</h4>
//       <RerenderizadorSinCambioProps></RerenderizadorSinCambioProps>
//       <h4>No Re-renderizado cambiando las propiedades</h4>
//       <NoRerenderizadorConCambioProps></NoRerenderizadorConCambioProps>
//     </>
//   </main>

//      )


// return (
//   <div >
//   <AppContext.Provider value={valoresDefecto}>
//   <Encabezado />
//   <div>Esto simplemente es contenido.</div>
//   <Pie />
//   </AppContext.Provider>
//   </div>
//   )
// const nombre = "";
// return (
//   <div className='App'>
//     <Saludo nombre="Gabi" />
//   </div>  
// )
<div>
    <form>
      <FormControlado></FormControlado>
    </form>
</div>



}

export default App;
