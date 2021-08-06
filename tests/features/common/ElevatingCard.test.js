import React from 'react';
import { shallow } from 'enzyme';
import { ElevatingCard } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ElevatingCard />);
  expect(renderedComponent.find('.common-elevating-card').length).toBe(1);
});
