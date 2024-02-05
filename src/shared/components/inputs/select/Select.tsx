import { Select as SelectAntd, SelectProps } from 'antd';

import { BoxSelect, SelectLabel } from './select.style';

interface ISelectProps extends SelectProps {
  margin?: string;
  label?: string;
}

const Select = ({ label, margin, ...props }: ISelectProps) => {
  return (
    <BoxSelect style={{ margin }}>
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectAntd {...props} />
    </BoxSelect>
  );
};

export default Select;
