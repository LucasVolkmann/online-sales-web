import { setItemStorage, unsetItemStorage } from '../storageProxy';

const MOCK_KEY = 'MOCK_KEY';
const MOCK_VALUE = 'MOCK_VALUE';

describe('Test numberToCurrency', () => {
  it('should save the passed value in the passed key', () => {
    setItemStorage(MOCK_KEY, MOCK_VALUE);

    expect(localStorage.getItem(MOCK_KEY)).toEqual(MOCK_VALUE);
  });
  it('should remove the value of the passed key', () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);
    unsetItemStorage(MOCK_KEY);

    expect(localStorage.getItem(MOCK_KEY)).toEqual(null);
  });
  it('should return the value of the passed key', () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);

    expect(localStorage.getItem(MOCK_KEY)).toEqual(MOCK_VALUE);
  });
});
