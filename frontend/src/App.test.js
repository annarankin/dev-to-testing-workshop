// Provides a wrapper around a React component
// that gives us awesome testing methods!
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DogeList from './components/list/DogeList';


// Mocking out this service since I don't want it to
// make real requests when my tests run.
// https://facebook.github.io/jest/docs/en/jest-object.html#jestmockmodulename-factory-options
jest.mock('./doge_api', () => {
  const doge = {
    id: 1,
    name: "Gizmo",
    profile_image: "https://i.imgur.com/MF6hysE.jpg",
    caption: "Brindle borker with a lot of love to give <3",
    likes: ["#tongueouttuesday", "car rides", "mlems", "fetch"]
  }
  class fakeDogeService {
    state = [doge]
    fetchAll = (callback) => {
      callback([doge])
    }
  }
  return new fakeDogeService()
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a DogeList', () => {
  const component = shallow(<App/>)
  expect(component.find(DogeList).length).toEqual(1)
})
