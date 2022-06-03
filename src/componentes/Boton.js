import React from 'react';
import '../styles/Boton.css'

function Boton({ texto, btnClick, manejarClick }) { // usando destructuring 
    return (
        <button
            className={btnClick ? 'btn-click' : 'btn-reiniciar'} // ternario cambia la clase
            onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;