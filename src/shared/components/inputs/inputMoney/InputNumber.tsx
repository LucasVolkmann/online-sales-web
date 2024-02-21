import { useEffect, useState } from 'react';

import Input, { InputProps } from '../input/Input';

interface InputNumberProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DECIMAL_SIZE = 2;

const InputNumber = ({ value, onChange, ...props }: InputNumberProps) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);

  useEffect(() => {
    const valueString = `${value}`;

    if (!/\D/.test(valueString.replace('.', ''))) {
      setCurrentValue(value.toFixed(DECIMAL_SIZE).toString().replace('.', ','));
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueRemoved = event.target.value.replace(',', '');

    const sizeSlice = valueRemoved.length - DECIMAL_SIZE;
    const newValue = [valueRemoved.slice(0, sizeSlice), '.', valueRemoved.slice(sizeSlice)].join(
      '',
    );

    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return <Input onChange={handleOnChange} value={currentValue} {...props} />;
};

export default InputNumber;
