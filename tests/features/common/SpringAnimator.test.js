import React from 'react';
import { shallow } from 'enzyme';
import { SpringAnimator } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringAnimator />);
  expect(renderedComponent.find('.common-spring-animator').length).toBe(1);
});
