import { getHeroeByIdAsync } from "../base-pruebas/base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => { 
    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then( hero =>{
                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
                // console.log(hero);
                done(); //esto me dice que me espere hasta que la funcion asyncrona termine
            })

     });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => { 
        
        const id = 100;

        getHeroeByIdAsync(id)
            .then( hero =>{
                expect(hero).toBeFalsy();
                // console.log(hero);
                done(); // esta evaluacion esta de mas
            }).catch(error =>{


                expect( error).toBe('No se pudo encontrar el héroe')
                // console.log(error);
                done();
            }) 

     });

 }) 