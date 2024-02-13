import { numberToCurrency } from '../numberToCurrency';

describe('Test numberToCurrency', () => {
  it('should return a format value', () => {
    const returnValue = numberToCurrency(55);

    expect(returnValue).toContain('R$');
    expect(returnValue).toContain('55,00');
  });
  it('should return two decimals of cents', () => {
    const returnValue = numberToCurrency(55.43333);

    expect(returnValue).toContain('R$');
    expect(returnValue).toContain('55,43');
  });
  it('should return a thousand format when send a value above or equal to 1000', () => {
    const returnValue = numberToCurrency(12000.43);

    expect(returnValue).toContain('R$');
    expect(returnValue).toContain('12.000,43');
  });
});
