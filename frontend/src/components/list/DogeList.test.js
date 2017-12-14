// Provides a wrapper around a React component
// that gives us awesome testing methods!
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import DogeList from './DogeList';
import DogeCard from './DogeCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // throw new Error('oh nooo')
  ReactDOM.render(<DogeList doges={[]} />, div);
});

it('renders some DogeCards', () => {
  const doge = {
    id: 1,
    name: "Gizmo",
    profile_image: "https://i.imgur.com/MF6hysE.jpg",
    caption: "Brindle borker with a lot of love to give <3",
    likes: ["#tongueouttuesday", "car rides", "mlems", "fetch"]
  }

  const component = shallow(<DogeList doges={[doge]}/>)
  expect(component.find(DogeCard).length).toEqual(1)
})
