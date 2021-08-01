import React from 'react';
import { shallow } from 'enzyme';
import { WizardBlocks } from '../../../src/features/blockly';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<WizardBlocks />);
  expect(renderedComponent.find('.blockly-wizard-blocks').length).toBe(1);
});
