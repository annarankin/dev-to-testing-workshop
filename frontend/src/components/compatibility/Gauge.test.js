// Provides a wrapper around a React component
// that gives us awesome testing methods!
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import Gauge from './Gauge';

const likesA = ["#tongueouttuesday", "car rides", "mlems", "fetch"]
const likesB = ["#tongueouttuesday", "car rides", "mlems", "fetch"]

it('renders without crashing', () => {
  const div = document.createElement('div');
  // throw new Error('oh nooo')
  ReactDOM.render(<Gauge />, div);
});

describe('when given two identical arrays', () => {
  it('displays "100%"')
})

describe('when given two arrays with some overlap', () => {
  it('displays the correct percentage')
})

describe('when given two arrays with no overlap', () => {
  it('displays "0%"')
})

describe('when not given two arrays', () => {
  it('displays an error state')
})
