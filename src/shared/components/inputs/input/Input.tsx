import { Input as InputAntD, InputProps as InputPropsAntD } from 'antd';

import { InputTestIdEnum } from './__tests__/inputTestIdEnum';
import { BoxInput, InputLabel } from './input.style';

export interface InputProps extends InputPropsAntD {
  margin?: string;
  label?: string;
  isPassword?: boolean;
}

const Input = ({ label, margin, isPassword, ...props }: InputProps) => {
  return (
    <BoxInput data-testid={InputTestIdEnum.BOX_INPUT} style={{ margin }}>
      {label && <InputLabel data-testid={InputTestIdEnum.INPUT_LABEL}>{label}</InputLabel>}
      {isPassword ? <InputAntD.Password {...props} /> : <InputAntD {...props} />}
    </BoxInput>
  );
};

export default Input;
