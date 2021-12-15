import React from "react";
import PropTypes from 'prop-types';
//import React, { Fragment } from "react";

const PrimeraApp = ( { saludo, subtitulo } )=> {
//const PrimeraApp = ( props )=> {

    // if(!saludo) {
    //     throw new Error('El suludo es necesario');
    // }

    // const saludo = "Hola Mundo";
    // console.log(props)    
    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1> {props.saludo} </h1> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Primera App con React'
}

export default PrimeraApp;
