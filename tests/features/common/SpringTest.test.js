import React from 'react';
import { shallow } from 'enzyme';
import { SpringTest } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringTest />);
  expect(renderedComponent.find('.common-spring-test').length).toBe(1);
});
