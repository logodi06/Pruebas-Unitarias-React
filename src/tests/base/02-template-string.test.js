import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template.string.js', () => {
    test('getSaludo debe de retornar Hola Lorena!', () => {
        const nombre = 'Lorena';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre + '!');  
    })

    //getSaludo debe retornar Hola Luis! si no hay argumento nombre
    test('getSaludo debe  retornar Hola Luis!, Luis es el argumento por defecto si no hay argumento nombre', () => {
        
        const nombre = '';
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Luis!');
    })
    
})
