import React from 'react';
import { shallow } from 'enzyme';
import { SpringPlayground } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SpringPlayground />);
  expect(renderedComponent.find('.common-spring-playground').length).toBe(1);
});
