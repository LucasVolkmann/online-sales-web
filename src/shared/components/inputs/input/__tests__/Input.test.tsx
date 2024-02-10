import { render, screen } from '@testing-library/react';

import Input from '../Input';
import { InputTestIdEnum } from './inputTestIdEnum';

const TEST_ID = 'TEST_ID';
const MARGIN = '25px';
const MOCK_LABEL = 'MOCK_LABEL';

describe('Test [Input]', () => {
  beforeEach(() => {
    render(<Input data-testid={TEST_ID} margin={MARGIN} />);
  });

  it('should be render the [nested input] and [BoxInput]', () => {
    expect(screen.getByTestId(TEST_ID)).toBeDefined();
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toBeDefined();
  });
  it('should have margin if its was defined', () => {
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toHaveProperty('style');
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT).style).toHaveProperty('margin', MARGIN);
  });
  it('should not have label if its was not defined', () => {
    const element = screen.queryAllByTestId(InputTestIdEnum.INPUT_LABEL);

    expect(element.length).toEqual(0);
  });
  it('should have label if its was defined', () => {
    render(<Input data-testid={TEST_ID + '2'} label={MOCK_LABEL} />);

    expect(screen.getByTestId(InputTestIdEnum.INPUT_LABEL)).toBeDefined();
  });
  it('should have label text equal to its was defined', () => {
    render(<Input data-testid={TEST_ID + '2'} label={MOCK_LABEL} />);

    expect(screen.getByTestId(InputTestIdEnum.INPUT_LABEL).innerHTML).toContain(MOCK_LABEL);
  });
  it('should be a password input if [isPassword] was defined as true', () => {
    render(<Input data-testid={TEST_ID + '2'} isPassword />);

    expect(screen.getByTestId(TEST_ID + '2')).toHaveProperty('type', 'password');
  });
});
