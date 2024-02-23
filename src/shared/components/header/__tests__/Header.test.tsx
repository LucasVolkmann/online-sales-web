import { fireEvent, render } from '@testing-library/react';

import { logout } from '../../../functions/connection/auth';
import { UserType } from '../../../types/UserType';
import { HeaderTestIdEnum } from '../enum/headerTestIdEnum';
import Header from '../Header';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../functions/connection/auth', () => ({
  logout: jest.fn(),
}));

const MOCK_USER: UserType = {
  id: 0,
  name: '',
  email: '',
  cpf: '',
  phone: '',
};
jest.mock('../../../../store/reducers/globalReducer/useGlobalReducer', () => ({
  useGlobalReducer: () => MOCK_USER,
}));

describe('Test [Header]', () => {
  it('should be render without a modal', () => {
    const { getByTestId, queryAllByTestId } = render(<Header />);

    expect(getByTestId(HeaderTestIdEnum.CONTAINER_TEST_ID)).toBeDefined();
    expect(getByTestId(HeaderTestIdEnum.LOGOUT_BUTTON_TEST_ID)).toBeDefined();
    expect(queryAllByTestId(HeaderTestIdEnum.MODAL_TEST_ID).length).toEqual(0);
  });
  it('should render the modal when logout button is clicked', () => {
    const { getByTestId, queryAllByTestId } = render(<Header />);

    const logo = getByTestId(HeaderTestIdEnum.LOGOUT_BUTTON_TEST_ID);

    expect(queryAllByTestId(HeaderTestIdEnum.MODAL_TEST_ID).length).toEqual(0);

    fireEvent.click(logo);

    expect(queryAllByTestId(HeaderTestIdEnum.MODAL_TEST_ID).length).toEqual(1);
  });
  it('should trigger logout function when Modal`s OK button is clicked', () => {
    const { getByTestId, getByText } = render(<Header />);

    const logo = getByTestId(HeaderTestIdEnum.LOGOUT_BUTTON_TEST_ID);
    fireEvent.click(logo);

    const confirmButton = getByText('Sim');
    fireEvent.click(confirmButton);

    expect(logout).toHaveBeenCalled();
  });
});
