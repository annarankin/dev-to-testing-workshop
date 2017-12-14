// This file will be run before your tests, good place for configuring external libraries
// https://github.com/facebookincubator/create-react-app/issues/3206

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
