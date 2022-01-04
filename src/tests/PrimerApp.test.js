import { React } from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en primera App', () => {
    // test('debe mostrar mensaje "Hola, Soy Goku!!"', () => {
        
    //     const saludo = "Hola, Soy Goku!!";
    //     const { getByText } = render(<PrimeraApp  saludo={ saludo } />);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // });

    test('debe mostrar <PrimeraApp/> correctamente', () => {

        const saludo = "Hola, Soy Goku!!";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });
    
    
})