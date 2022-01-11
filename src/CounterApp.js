import React, {useState} from 'react'
//Son los tipos de los propeties que van a recibir los comoponentes, se utiliza para 
//validar el tipo de valor que se recibe
import PropTypes from 'prop-types'

const CounterApp = ({valor = 10}) => {

    // const [nombre, setNombre ] = useState('Goku'); 
    // console.log(nombre, setNombre);

    //El React useStateHook nos permite rastrear el estado en un componente de función.
    // El estado generalmente se refiere a datos o propiedades que deben rastrearse en una aplicación.
    const [ counter, setCounter ] = useState (valor);  //useState retorna 2 argumentos 1.Variable del valor y 2 una función
                                       // []

    //handleAdd
    const handleAdd = () =>{
        //setCounter( counter + 1 );
        setCounter((c) => c + 1 );
    }

    const handleSubtract = () => {
        setCounter ( counter - 1);
    }

     const handleReset = () => {
        setCounter (valor);
     }
    return (
        <>
            <h1>CounterApp</h1>
           
            <h2>{counter}</h2>
            {/* Se pasa el nombre de la  función para que se renderize, mas no para que se 
            ejecute, se ejecutará cuando se de click en el botón */}
          <button onClick={ handleAdd } >+1</button>
           <button onClick={ handleReset }  >Reset</button> 
           <button onClick={ handleSubtract }  >-1</button> 
        </>
    )
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp


// import React from "react";
// import Prototipes from "prop-types";

// const CounterApp = ({valor}) => {
//     return (
//         <>
//             <h1>CounterApp</h1>
//             <h2>{valor}</h2>
//         </>
//     );
// }

// CounterApp.prototype = {
//     valor: Prototipes.number.isRequired
// }

// export default CounterApp