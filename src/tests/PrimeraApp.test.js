//import { render } from '@testing-library/react';
import React from "react";

//Importación para tener la opciones de toMatchSnapshot
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import PrimeraApp from '../PrimeraApp';
import { setupTests } from "../setupTests";
describe('Pruebas en primeraApp', () => {
    //Para poder utilizar el toBeInTheDocument se utiliza import '@testing-library/jest-dom/extend-expect';
    //que se encuentra en el archivo de setUpTest

    /*Para hacer el test se utiliza render*/
    // test('Debe de mostrar el mensaje "Hola, Soy Goku', () => {
    //       const saludo = 'Hola, soy Goku';

    //     //   const wrapper = render (<PrimeraApp saludo={saludo}/>);
    //     //   wrapper.getByText();
    //     const {getByText} = render(<PrimeraApp saludo= {saludo}/>)
    //     expect (getByText(saludo)).toBeInTheDocument;
    // });
    
    //Pruebas unitarias con enzyme
    //Pruebas con Enzyme - Testing Unit

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
            //El wrapper contiene todo el renderizado de PrimeraApp.js
            //Contiene el h1, p etc...
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el sutitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo}
            />);
            //El wrapper contiene todo el renderizado de PrimeraApp.js
            //Contiene el h1, p etc...
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        console.log(subtitulo);
        expect(textoParrafo).toBe(subtitulo);
    })
    
    

});
