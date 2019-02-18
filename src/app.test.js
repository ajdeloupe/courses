import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
//set up some dummy data to test with
const state = {
  turnData: {
    books: ['The Shining', 'IT', 'Hamlet', 'Harry Potter'],
    author: {
        name: 'Stephen King',
        imgUrl: 'images/authors/stephenking.jpg',
        books: ['The Shining', 'IT']
    },
  },
  correct: 'none'
};
describe('Testing App with jest', () => {
  it('renders without crashing', () => {
    //create a test div to render it to
    const div = document.createElement('div');
    //can set function properties to just an empty function
    ReactDOM.render(<Header  />, div);
    //remove it when done.
    ReactDOM.unmountComponentAtNode(div);
  });
  /* describe("when no answer has been selected", ()=>{
    let wrapper;
    //beforeAll is a function to set up the scenario
    beforeAll(()=>{
      //mount is an enzyme function
      wrapper= mount(<ReactFunctions.AuthorQuiz {...state} checkAnswer = {()=>{}} reshuffle =  {()=>{}} />);
    });
    it("should have no background color", ()=>{
      expect(wrapper.find('div.turn').props().style.backgroundColor).toBe('');
    })
  });
  describe("when the wrong answer has been selected", ()=>{
    let wrapper;
    beforeAll(()=>{
      wrapper= mount(<ReactFunctions.AuthorQuiz {...(Object.assign({}, state, {correct: 'wrong'}))} checkAnswer = {()=>{}} reshuffle =  {()=>{}} />);
    });
    it("should have red background color", ()=>{
      expect(wrapper.find('div.turn').props().style.backgroundColor).toBe('red');
    })
  });
  describe("when the correct answer has been selected", ()=>{
    let wrapper;
    beforeAll(()=>{
      wrapper= mount(<ReactFunctions.AuthorQuiz {...(Object.assign({}, state, {correct: 'correct'}))} checkAnswer = {()=>{}} reshuffle =  {()=>{}} />);
    });
    it("should have green background color", ()=>{
      expect(wrapper.find('div.turn').props().style.backgroundColor).toBe('green');
    })
  });
  describe("when the user selects their first answer", ()=>{
    let wrapper;
    //set handleAnswerSelected to a jest dummy function so we can get information on what is passed to the function
    const handleAnswerSelected = jest.fn();
    beforeAll(()=>{
      wrapper= mount(<ReactFunctions.AuthorQuiz {...state} checkAnswer = {handleAnswerSelected} reshuffle =  {()=>{}} />);
      //simulate a click event on the first book title
      wrapper.find('.book').first().simulate('click');
    });
    it("should trigger checkAnswer", ()=>{
      //check if the function was called
      expect(handleAnswerSelected).toHaveBeenCalled();
    });
    it("should receive The Shining", ()=>{
      //check whether it was passed the title. Our dummy data has The Shining as the first book.
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
    })
  })
});
const moment = new Date();
describe("When Testing Directly", () => {
  let result;
  beforeAll(() => {
    result = ReactFunctions.Hello({now: moment.toISOString()})
  }

  );
  it("should return a value", () => {
    expect(result).not.toBeNull();
  });
  it("is a div", () => {
    expect(result.type).toBe("div");
  });
  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe("When Testing with ReactDOM", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ReactFunctions.Hello now = {moment.toISOString()} />, div
    )
  })
});
Enzyme.configure({adapter: new Adapter()});
describe("When Testing with Enzyme", () => {
  it("Renders a div", () => {
    const wrapper = shallow(<ReactFunctions.Hello now = {moment.toISOString()} />);
    expect(wrapper.find('div').length).toBe(1);
  }); */
  /* it("contains Hello at", () => {
    const wrapper = shallow(<ReactFunctions.Hello now = {moment.toISOString()} />);
    expect(wrapper.contains('Hello at')).toBe(true);
  }); */
});

