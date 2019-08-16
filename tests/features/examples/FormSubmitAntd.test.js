import React from 'react';
import { shallow } from 'enzyme';
import { FormSubmitAntd } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FormSubmitAntd />);
  expect(renderedComponent.find('.examples-form-submit-antd').length).toBe(1);
});
