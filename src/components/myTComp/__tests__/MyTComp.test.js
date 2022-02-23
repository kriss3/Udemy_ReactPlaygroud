import React from 'react';
import { shallow } from 'enzyme';
import MyTComp from '../MyTComp';

const setup = () => shallow(
    <MyTComp />,
);
const addNumbers = (x,y) => x + y;

describe('<MyTComp/>', () => {

    it('should add two number correclty', () => {
        const expected = 4;

        const acutal = addNumbers(2,2);
        expect(expected).toEqual(acutal);
    });

    fit('should set state correctly', () => {
        const comp = setup();

        expect(comp.state()).toMatchObject({
            fName: ''
        });
    });

});
