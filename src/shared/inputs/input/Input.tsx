import { Input as InputAntD, InputProps as InputPropsAntD } from 'antd';

import { BoxInput, InputLabel } from './input.style';

interface IProps extends InputPropsAntD {
  label?: string;
  isPassword?: boolean;
}

const Input = ({ label, isPassword, ...props }: IProps) => {
  return (
    <BoxInput>
      {label && <InputLabel>{label}</InputLabel>}
      {isPassword ? <InputAntD.Password {...props} /> : <InputAntD {...props} />}
    </BoxInput>
  );
};

export default Input;
