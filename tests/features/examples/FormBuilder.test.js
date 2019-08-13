import React from 'react';
import { shallow } from 'enzyme';
import { FormBuilder } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FormBuilder />);
  expect(renderedComponent.find('.examples-form-builder').length).toBe(1);
});
