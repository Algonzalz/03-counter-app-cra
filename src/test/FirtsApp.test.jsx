import { render } from "@testing-library/react";
import { FirtsApp } from "../FirtsApp";


describe('Pruebas en <FirtsApp.test/> ', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        const title= 'Hola, soy goku';
        render(<FirtsApp />);
    })
 })