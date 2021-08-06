import React from 'react';
import { shallow } from 'enzyme';
import { AnimList } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AnimList />);
  expect(renderedComponent.find('.common-anim-list').length).toBe(1);
});
