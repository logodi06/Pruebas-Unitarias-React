
//Hacer pruebas

describe('Pruebas en el archivo demo.test.js', () => {
    
    test( 'deben de ser iguales los string', () => {
    
        //1 Inicialización
        const mensaje = 'Hola Mundo';
    
     //2. Estimulo
     const mensaje2 = `Hola Mundo`;
    
     //Observar el comportamiento
     //link https://jestjs.io/ para obtener los expect
     //.toBe compara el mensaje con mensaje2 y compara si son iguales
        expect(mensaje).toBe(mensaje2); //===
    })
});
