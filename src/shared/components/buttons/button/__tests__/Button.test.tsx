import { render, screen } from '@testing-library/react';

import Button from '../Button';

const TEXT_MOCK = 'TEXT_MOCK';
const TEST_ID = 'TEST_ID';
const MARGIN_MOCK = '23px';
const PADDING_MOCK = '25px';

describe('Test [Button]', () => {
  beforeEach(() => {
    render(
      <Button data-testid={TEST_ID} margin={MARGIN_MOCK}>
        {TEXT_MOCK}
      </Button>,
    );
  });

  it('should be render', () => {
    expect(screen.getByText(TEXT_MOCK)).toBeDefined();
  });
  it('should margin attribute', () => {
    expect(screen.getByTestId(TEST_ID)).toHaveProperty('style');
    expect(screen.getByTestId(TEST_ID).style).toHaveProperty('margin', `${MARGIN_MOCK}`);
  });
  it('should have predefined text', () => {
    expect(screen.getByTestId(TEST_ID).textContent).toEqual(TEXT_MOCK);
  });
  it('should have defined props', () => {
    render(
      <Button data-testid={TEST_ID + '2'} style={{ padding: PADDING_MOCK }}>
        MOCK
      </Button>,
    );
    expect(screen.getByTestId(TEST_ID + '2')).toHaveProperty('style');
    expect(screen.getByTestId(TEST_ID + '2').style).toHaveProperty('padding', PADDING_MOCK);
  });
});
