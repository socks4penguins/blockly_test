import React from 'react';
import { shallow } from 'enzyme';
import { ListContainer } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ListContainer />);
  expect(renderedComponent.find('.common-list-container').length).toBe(1);
});
