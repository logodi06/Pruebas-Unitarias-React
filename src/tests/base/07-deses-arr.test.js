import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en desesctructuración 07', () => {
    test('Debe de retornar un string y un número', () => {
        // const arr = retornaArreglo();
        // expect(arr).toEqual(['ABC',123]);

         const [letras, numero] = retornaArreglo();
         //console.log(typeof letras);
         expect(letras).toBe('ABC');
         expect(typeof letras).toBe('string');

         expect(numero).toBe(123);
         expect(typeof numero).toBe('number');


    })
    
})
