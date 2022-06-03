import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; // forma de importar imagenes
import Boton from './componentes/Boton';

function App() {

  const manejarClick = () => {
    console.log('click');
  }

  const reiniciarContador = () => {
    console.log('reiniciar');
  }

  return (
    <div className='App'>
      <div className='freecode-camp-logo-contenedor'>
        <img
          className='free-code-camp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-contador'>
        <Boton
          texto='click'
          btnClick={true}
          manejarClick={ manejarClick } />

        <Boton
          texto='reiniciar'
          btnClick={false}
          manejarClick={ reiniciarContador } />
      </div>
    </div>
  );
}

export default App;
