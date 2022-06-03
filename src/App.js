import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; // forma de importar imagenes

function App() {
  return (
    <div className='App'>
      <div className='freecode-camp-logo-contenedor'>
        <img
          className='free-code-camp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-contador'>
        
      </div>
    </div>
  );
}

export default App;
