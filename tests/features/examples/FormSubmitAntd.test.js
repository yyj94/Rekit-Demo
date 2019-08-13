import React from 'react';
import { shallow } from 'enzyme';
import { FormSubmitAntd } from '../../../src/features/examples/FormSubmitAntd';

describe('examples/FormSubmitAntd', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <FormSubmitAntd {...props} />
    );

    expect(
      renderedComponent.find('.examples-form-submit-antd').length
    ).toBe(1);
  });
});
