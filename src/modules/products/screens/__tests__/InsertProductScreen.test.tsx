import { act, fireEvent, render } from '@testing-library/react';

import { mockInsertProduct } from '../../__mocks__/mockInsertProduct.mock';
import { InsertProductScreenTestIdEnum } from '../../enum/InsertProductScreenTestIdEnum';
import InsertProductScreen from '../InsertProductScreen';

let currentValue = '';
let currentType = '';

jest.mock('../../../../shared/hooks/useInsertProduct', () => ({
  useInsertProduct: () => ({
    insertProduct: mockInsertProduct,
    disabled: false,
    loading: false,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      currentType = value;
      currentValue = event.target.value;
    },
    handleSelectChange: jest.fn(),
    handleOnClick: jest.fn(),
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
  it('should call [handleOnChange] function when change the [input name]', () => {
    const { getByTestId } = render(<InsertProductScreen />);

    const input = getByTestId(InsertProductScreenTestIdEnum.NAME_INPUT);

    act(() => {
      fireEvent.change(input, { target: { value: 'mock name' } });
    });

    expect(currentValue).toEqual('mock name');
    expect(currentType).toEqual('name');
  });
  it('should call [handleOnChange] function when change the [input image]', () => {
    const { getByTestId } = render(<InsertProductScreen />);

    const input = getByTestId(InsertProductScreenTestIdEnum.IMAGE_INPUT);

    act(() => {
      fireEvent.change(input, { target: { value: 'mock image' } });
    });

    expect(currentValue).toEqual('mock image');
    expect(currentType).toEqual('image');
  });
  it('should call [handleOnChange] function when change the [input price]', () => {
    const { getByTestId } = render(<InsertProductScreen />);

    const input = getByTestId(InsertProductScreenTestIdEnum.PRICE_INPUT);

    act(() => {
      fireEvent.change(input, { target: { value: 12345 } });
    });

    expect(currentValue).toEqual('123.45');
    expect(currentType).toEqual('price');
  });
});
