import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import '@testing-library/jest-dom';
import { setupTests } from "../setupTests";

describe('Pruebas en CountApp', () => {
    //Se puede inicializar la variable pero no es una buena practica, porque se estaría
    //inicializando dos veces, pero eso es para no perder las opciones de ayuda que muestra el wrapper
    //let wrapper = shallow(<CounterApp/>);
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<CounterApp/>);

    });

    test('Debe de mostrar <CountApp/> correctamente', () => {
       
        // const etiqueta = wrapper.find('h2').text();
        // console.log(etiqueta);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const counter = 100;
        const wrapper = shallow(<CounterApp valor={counter}/>);

        const valorDefecto = wrapper.find('h2').text().trim();
        //console.log(valorDefecto);

        expect(valorDefecto).toBe('100');
    });

    test('Debe de incrementar con el boton +1', () => {
        // const btn1 = wrapper.find('button').at(0).simulate('click');
        // console.log(btn1.html());

        wrapper.find('button').at(0).simulate('click');
        //Para volver a ejecutar la funcionalidad del boton se vuelve a colocar 
        //wrapper.find('button').at(0).simulate('click'); //Suma +1 al valor 

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');  
    });

    test('Debe de decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        //console.log(btn1.html());
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');  
    });

    test('Debe de establecer el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp valor={105}/>);
       wrapper.find('button').at(0).simulate('click');
       wrapper.find('button').at(0).simulate('click');
       wrapper.find('button').at(1).simulate('click');

       const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);

        expect(counterText).toBe('105');
    })
    
    
    
    
});
