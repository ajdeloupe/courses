import React from 'react';
import ReactDOM from 'react-dom';
import {ManageCoursePage} from './manageCoursePage';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe('Manage Course Page tests', () =>{
    it('Should set error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: {saveCourse: () => {return Promise.resolve()}},
            course: {id: '', watchHref: '', title: '', authorId:'',length: '', category:''}
        }
        //use mount to test interactions with child components
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});