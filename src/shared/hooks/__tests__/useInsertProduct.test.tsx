import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import { useInsertProduct } from '../useInsertProduct';

// import { useNavigate } from 'react-router-dom';
// import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

const mockNavigate = jest.fn();
const mockSetNotification = jest.fn();

jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));
jest.mock('../../../store/reducers/globalReducer/useGlobalReducer', () => ({
  useGlobalReducer: () => ({
    setNotification: mockSetNotification,
  }),
}));

describe('Test useInsertProduct', () => {
  it('should set up initial states', () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.loading).toEqual(false);
    expect(result.current.disabled).toEqual(true);
    expect(result.current.insertProduct).toEqual({
      name: '',
      image: '',
      price: 0,
    });
  });
  it('should set [category_id] when [handleSelectChange] has been called', () => {
    const MOCK_VALUE = '7';
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleSelectChange(MOCK_VALUE);
    });

    expect(result.current.insertProduct.categoryId).toEqual(Number(MOCK_VALUE));
  });
  it('should set [name] when [handleInputChange] send name', () => {
    const MOCK_VALUE = 'mock name';
    const MOCK_FIELD = 'name';
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleInputChange({ target: { value: MOCK_VALUE } } as any, MOCK_FIELD);
    });

    expect(result.current.insertProduct.name).toEqual(MOCK_VALUE);
  });
  it('should set [price] as numeric when [handleInputChange] send [price] and [isNumeric]', () => {
    const MOCK_VALUE = '12345';
    const MOCK_FIELD = 'price';
    const MOCK_IS_NUMERIC = true;

    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleInputChange(
        { target: { value: MOCK_VALUE } } as any,
        MOCK_FIELD,
        MOCK_IS_NUMERIC,
      );
    });

    expect(result.current.insertProduct.price).toEqual(Number(MOCK_VALUE));
  });
  it('should only set [disabled] to false when all fields are filled in', () => {
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleInputChange({ target: { value: 'mock name' } } as any, 'name');
    });
    expect(result.current.disabled).toBe(true);

    act(() => {
      result.current.handleInputChange({ target: { value: 'http mock image' } } as any, 'image');
    });
    expect(result.current.disabled).toBe(true);

    act(() => {
      result.current.handleInputChange({ target: { value: '12345' } } as any, 'price', true);
    });
    expect(result.current.disabled).toBe(true);

    act(() => {
      result.current.handleSelectChange('3');
    });
    expect(result.current.disabled).toBe(false);

    act(() => {
      result.current.handleInputChange({ target: { value: '' } } as any, 'name');
    });
    expect(result.current.disabled).toBe(true);
  });
});
