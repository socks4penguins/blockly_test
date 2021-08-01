import React from 'react';
import { shallow } from 'enzyme';
import { WelcomePage } from '../../../src/features/blockly';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<WelcomePage />);
  expect(renderedComponent.find('.blockly-welcome-page').length).toBe(1);
});
