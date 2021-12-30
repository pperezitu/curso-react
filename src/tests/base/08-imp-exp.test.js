import '@testing-library/jest-dom';
import { getHeroeById } from '../../base/08-imp-exp';
import { getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08 Imp Exp', () => {

    test('Debe de retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => heroe.id);
        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si un heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar un heroe por OWNER', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes);
        const heroesData = heroes.filter(o => o.owner === owner);
        expect(heroes).toEqual(heroesData);
    });


    test('Debe de retornar un LENGTH igual a 2', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        expect(heroes.length).toEqual(2);
    });
});