import React from 'react';
import {createStore} from 'redux';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as courseActions from '../actions/courseActions';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';


Enzyme.configure({adapter: new Adapter()});

describe('Store', () =>{
    it('Should handle creating courses', () => {
        //arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'Clean Code'
        }
        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);
        //assert
        const actual = store.getState().courses[0];
        const expected = {
            title: 'Clean Code'
        };
        expect(actual).toEqual(expected);
    });
});