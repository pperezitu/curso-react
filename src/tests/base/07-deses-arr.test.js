import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07 Deses Arr', () => {

    test('Debe de retornar un string y un numero', () => {

        // const arreglo = retornaArreglo(); // ['ABC', 123]
        const [ letras, numeros ] = retornaArreglo(); // ['ABC', 123]
        console.log(typeof letras);
        console.log(typeof numeros);
        // expect(arreglo).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    });
});