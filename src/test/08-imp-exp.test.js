import { getHeroeById, getHeroesByOwner } from "../base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe devolver un heroe', () => { 
        const id = 1;
        
        const heroe = getHeroeById(id);

        expect( heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined si no existe', () => { 
        const id = 100;
        
        const heroe = getHeroeById(id);

        expect( heroe ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar los heroes de DC', () => { 

        const owner = 'DC'
        const dcheroe = getHeroesByOwner(owner)

        // expect( dcheroe ).toHaveLength(3);
        expect( dcheroe ).toEqual(heroes.filter( (heroe) => heroe.owner === owner));

    });

    test('getHeroesByOwner debe retornar los heroes de Marvel', () => { 

        const owner = 'Marvel'
        const dcheroe = getHeroesByOwner(owner)

        // expect( dcheroe ).toHaveLength(3);
        expect( dcheroe ).toEqual(heroes.filter( (heroe) => heroe.owner === owner));

    });

    

 })