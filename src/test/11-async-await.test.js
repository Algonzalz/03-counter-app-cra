import { getImagen } from "../base-pruebas/base-pruebas/11-async-await";

describe('pruebas en 11-async-await', () => { 
    
    test('getImage debe retorna un url de una imagen', async() => { 
        
        const url = await getImagen();
        expect( typeof url ).toBe('string');



     });


 });