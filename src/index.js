import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './componentes/CounterApp';

import './index.css';

//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

const dadad= "este es un valor en string";

// console.log(divRoot);

console.log(this.dadad);

//ReactDOM.render( saludo, divRoot );
//ReactDOM.render( <CounterApp value={ 10 } /> , divRoot );
ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku!!" /> , divRoot );
//ReactDOM.render( <PrimeraApp saludo="Hola soy Goku!!" /> , divRoot );
