describe('prueba en archivo demo.js', ()=> {

    test('deben de ser iguales los strings', () => {

        // 1. Inicialización
        const mensaje = 'Hola Mundo';

        // 2. Estimulo
        const mensajeDos = `Hola Mundo`;

        // 3. Observar el comportamineto
        expect(mensaje).toBe(mensajeDos);
        
    });
    
});