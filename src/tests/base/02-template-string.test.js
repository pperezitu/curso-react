import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar un saludo', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        console.log(saludo);
        expect(saludo).toBe('Hola ' + nombre + '!');
    });
    
    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('get saludo retorna Hola Carlos', ()=> {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!')
    });
    
});