import { ButtonProps } from 'antd';

import { ButtonAntD } from './button.style';

interface IButtonProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: IButtonProps) => {
  return <ButtonAntD style={{ margin }} {...props} />;
};

export default Button;
