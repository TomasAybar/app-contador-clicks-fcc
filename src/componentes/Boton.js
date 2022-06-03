import React from 'react';

function Boton({ texto }) { // usando destructuring 
    return ( 
        <button>
            {texto}
        </button>
     );
}

export default Boton;