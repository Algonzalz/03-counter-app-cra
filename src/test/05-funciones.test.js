import { getUser, getUsuarioActivo } from "../base-pruebas/base-pruebas/05-funciones"

  
  describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( testUser).toEqual(user);

     })


     test('getUsuario Activo debe de retornar un objeto', () => { 

        const name = 'henry';
        const userActivo = getUsuarioActivo(name);

        expect( userActivo ).toEqual({
            uid: 'ABC567',
            username: name
        });
        
    })

   })