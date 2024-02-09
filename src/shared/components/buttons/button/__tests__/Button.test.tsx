import { render } from '@testing-library/react';

import Button from '../Button';

describe('Test Button', () => {
  it('test render', () => {
    render(<Button />);
    expect(1).toEqual(1);
  });
});
