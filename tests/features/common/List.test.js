import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<List />);
  expect(renderedComponent.find('.common-list').length).toBe(1);
});
