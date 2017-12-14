// Provides a wrapper around a React component
// that gives us awesome testing methods!
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import DogeCard from './DogeCard';

const doge = {
  id: 1,
  name: "Gizmo",
  profile_image: "https://i.imgur.com/MF6hysE.jpg",
  caption: "Brindle borker with a lot of love to give <3",
  likes: ["#tongueouttuesday", "car rides", "mlems", "fetch"]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  // throw new Error('oh nooo')
  ReactDOM.render(<DogeCard />, div);
});

it('renders a DogeCard', () => {
  const component = shallow(<DogeCard {...doge} />)
  expect(component.find('h3').text()).toContain('Gizmo')
})
