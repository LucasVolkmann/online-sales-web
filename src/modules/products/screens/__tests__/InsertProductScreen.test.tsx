import { render } from '@testing-library/react';

import { mockInsertProduct } from '../../__mocks__/mockInsertProduct.mock';
import { InsertProductScreenTestIdEnum } from '../../enum/InsertProductScreenTestIdEnum';
import InsertProductScreen from '../InsertProductScreen';

jest.mock('../../../../shared/hooks/useInsertProduct', () => ({
  useInsertProduct: () => ({
    insertProduct: mockInsertProduct,
    disabled: false,
    loading: false,
    handleOnClick: jest.fn(),
    handleInputChange: jest.fn(),
    handleSelectChange: jest.fn(),
  }),
}));
jest.mock('../../../categories/hooks/useCategory', () => ({
  useCategory: () => ({
    categories: [],
  }),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Test [InsertProductScreen]', () => {
  it('should be render', () => {
    const { getByTestId } = render(<InsertProductScreen />);

    expect(getByTestId(InsertProductScreenTestIdEnum.OUTSIDE_CONTAINER)).toBeDefined();
    expect(getByTestId(InsertProductScreenTestIdEnum.NAME_INPUT)).toBeDefined();
    expect(getByTestId(InsertProductScreenTestIdEnum.IMAGE_INPUT)).toBeDefined();
    expect(getByTestId(InsertProductScreenTestIdEnum.PRICE_INPUT)).toBeDefined();
    expect(getByTestId(InsertProductScreenTestIdEnum.CATEGORY_SELECT)).toBeDefined();
    expect(getByTestId(InsertProductScreenTestIdEnum.INSERT_BUTTON)).toBeDefined();
    expect(getByTestId(InsertProductScreenTestIdEnum.CANCEL_BUTTON)).toBeDefined();
  });
});
