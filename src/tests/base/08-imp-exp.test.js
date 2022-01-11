import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

    describe('08-imp-ext.test.js Pruebas en funciones de Héroes', () => {
        test('getHeroeById de retornar un heroe por id', () => {

            const id = 1;
                
            const heroe = getHeroeById(id);

            const heroeData = heroes.find(h =>  h.id === id);

            expect(heroe).toEqual(heroeData);   
        });

        test('getHeroeById de retornar un undefined si heroe no existe', () => {

            const id = 12;
                
            const heroe = getHeroeById(id);

            expect(heroe).toBe(undefined);   
        });

        test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC ', () => {
            const owner = 'DC';

            const heroes = getHeroesByOwner(owner);
            //console.log(heroes);
            const heroeData = heroes.filter(h => h.owner === owner);
            //console.log(heroeData);
            expect(heroes).toEqual(heroeData);
        });

        test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel ', () => {
            const owner = 'Marvel';

            const heroes = getHeroesByOwner(owner);
            //console.log(heroes);
            //const heroeData = heroes.filter(h => h.owner === owner);
            //console.log(heroeData);
            expect(heroes.length).toBe(2);
        })
        
        
    })
    