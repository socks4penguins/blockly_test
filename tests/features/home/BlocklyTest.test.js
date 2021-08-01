import React from 'react';
import { shallow } from 'enzyme';
import { BlocklyTest } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<BlocklyTest />);
  expect(renderedComponent.find('.blockly-blockly-test').length).toBe(1);
});
