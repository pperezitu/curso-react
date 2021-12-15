import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './componentes/CounterApp';

import './index.css';

//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

// console.log(divRoot);

//ReactDOM.render( saludo, divRoot );
ReactDOM.render( <CounterApp value={ 10 } /> , divRoot );
//ReactDOM.render( <PrimeraApp saludo="Hola soy Goku!!!" /> , divRoot );
//ReactDOM.render( <PrimeraApp saludo="Hola soy Goku!!" /> , divRoot );