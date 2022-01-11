import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('debe de retornar un Héroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
              done();
            });
    });

    test('debe de retornar error si el  heroe no existe', (done) => {
        const id = 7;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
            // .then(heroe => {
            //     expect(heroe).toBe(heroes[0]);
            //   done();
            // });
    });
    
})
