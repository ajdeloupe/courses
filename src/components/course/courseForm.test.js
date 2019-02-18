import React from 'react';
import ReactDOM from 'react-dom';
import CourseForm from './courseForm';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

function setup(saving) {
    const props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };
    return shallow(<CourseForm {...props} />);
}
describe('Testing CourseForm with jest', () => {
    it('renders a form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });
    it('save button is labeled "save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('save');
    });
    it('save button is labeled "save.." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});