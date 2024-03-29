import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({adapter: new Adapter()});

describe('Course Actions', () =>{
    describe('createCourseSuccess', () =>{
        it('should Create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };
            //act
            const action = courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('Async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //using nock
        //nock('http://example.com/').get('/courses').reply(200, {body: {course: [{id:1, firstName: 'Cory', lastName: 'House'}]}});
        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];
        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(()=> {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        })
    });
});