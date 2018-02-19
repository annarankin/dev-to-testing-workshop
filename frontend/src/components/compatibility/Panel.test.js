// Provides a wrapper around a React component
// that gives us awesome testing methods!
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';

it('matches snapshot', () => {
  const props = {
    name: 'Bob the Dog',
    profile_image: 'http://image.com/dog.jpg',
    caption: 'I am a dog',
    likes: [ 'cats', 'birds', 'frisbee' ]
  }
  const componentWrapper = shallow(<Panel {...props} />)

  expect(componentWrapper).toMatchSnapshot()
});
