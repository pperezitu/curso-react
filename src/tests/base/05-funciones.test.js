import { getUser } from '../../base/05-funciones';
import { getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05 funciones', () => {
    test('debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'            
        }

        const user = getUser();
        console.log(user)

        expect(user).toEqual(userTest);

    })

    test('Debe retornar un obejeto donde se pasa un argumento', () => {
        const nombre = 'Lucia';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    });

});