import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {authorsFormattedForDropdown} from './selectors';
Enzyme.configure({adapter: new Adapter()});

describe('Author selectors', () =>{
    describe('authorsFormattedForDropdown', () => {
        it('Should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
            ];
            const expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'scott-allen', text: 'Scott Allen'}
            ];
            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
   
});
