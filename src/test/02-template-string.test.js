import { getSaludo } from "../base-pruebas/base-pruebas/02-template-string";


describe('Pruebas en 02-template-string', () => { 

    test('getSaludo debe retornar un nombre', () => { 


        const name = 'henry';

        const message = getSaludo( name);


        expect( message).toBe(`Hola ${ name }`);

     })



 })
