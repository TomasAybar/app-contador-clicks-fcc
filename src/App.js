import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; // forma de importar imagenes
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Footer from './componentes/Footer';
import { useState } from 'react'; // estados

function App() {

  const [numeroClicks, setNumeroClicks] = useState(0); // 0 valor inicial de numero de clicks

  const manejarClick = () => {
    // console.log('click');
    setNumeroClicks(numeroClicks + 1);
  };

  const reiniciarContador = () => {
    // console.log('reiniciar');
    setNumeroClicks(0);
  };

  return (
    <div className='App'>
      <div className='freecode-camp-logo-contenedor'>
        <img
          className='free-code-camp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>

      <div>
        <Contador
          numeroClicks={numeroClicks} />

        <Boton
          texto='click'
          btnClick={true}
          manejarClick={manejarClick} />

        <Boton
          texto='reiniciar'
          btnClick={false}
          manejarClick={reiniciarContador} />
      </div>

      <div>
        <Footer
          msg='Tomas Aybar' />
      </div>
    </div>
  );
}

export default App;
