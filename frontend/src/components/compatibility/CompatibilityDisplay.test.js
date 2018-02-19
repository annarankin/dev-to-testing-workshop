// Provides a wrapper around a React component
// that gives us awesome testing methods!
// http://airbnb.io/enzyme/docs/api/
import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import CompatibilityDisplay from './CompatibilityDisplay';
import Panel from './Panel';
import Gauge from './Gauge';

describe('when given an object that contains "dogeA" and "dogeB"', () => {
  it('renders a child components', () => {
    const props = { dogeA: true, dogeB: true }
    const componentWrapper = shallow(<CompatibilityDisplay {...props} />)

    expect(componentWrapper.contains([<Panel />, <Gauge />, <Panel />])).toBe(true)
  })

  // Note - the above test is pretty useless compared to a simple snapshot test:
  it('matches snapshot', () => {
    const props = { dogeA: true, dogeB: true }
    const componentWrapper = shallow(<CompatibilityDisplay {...props} />)

    expect(componentWrapper).toMatchSnapshot()
  })
})

describe('with empty props', () => {
  it('displays a loading indicator', () => {
    const componentWrapper = shallow(<CompatibilityDisplay />)

    expect(componentWrapper.text()).toEqual('Loading!')
  })
})

