import { Input as InputAntD, InputProps as InputPropsAntD } from 'antd';

import { BoxInput, InputLabel } from './input.style';

interface IProps extends InputPropsAntD {
  margin?: string;

  label?: string;
  isPassword?: boolean;
}

const Input = ({ label, margin, isPassword, ...props }: IProps) => {
  return (
    <BoxInput style={{ margin }}>
      {label && <InputLabel>{label}</InputLabel>}
      {isPassword ? <InputAntD.Password {...props} /> : <InputAntD {...props} />}
    </BoxInput>
  );
};

export default Input;
