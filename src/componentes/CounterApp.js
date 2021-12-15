import React, { Fragment } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value = 10})=> {

    // const state = useState('Goku');
    // console.log(state);

    const [counter, setCounter] = useState( value ); // []

    // se agrega evento que suma
    const handleAdd  = (e) => {
        console.log(e);
        setCounter(counter + 1);
    }

    const handleSubstrac = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        console.log('reset')
        setCounter(value);
    }

    return(
        <Fragment>
            <h1>Counter App</h1>
            {/* <p>{value}</p> */}
            <p>{counter}</p>
            <button onClick={ handleAdd }>+ 1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstrac }>- 1</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;