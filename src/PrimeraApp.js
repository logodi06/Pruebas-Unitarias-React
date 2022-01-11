//import React, { Fragment } from 'react';
import React from 'react';

//Son los tipos de los propeties que van a recibir los comoponentes
import PropTypes from "prop-types";


//Function components, trabaja como una función
const PrimeraApp = ({saludo, subtitulo}) => {

   
   
    return ( 
        <>
            <h1>{ saludo}!!!</h1>
            {/* <h1>{JSON.stringify(saludo, null, 3)}</h1> */}
            <p>{subtitulo}</p>
        </>
   );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp