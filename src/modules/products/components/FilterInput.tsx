import { Input, InputProps } from 'antd';

const { Search } = Input;

interface FilterInputProps extends InputProps {
  onSearch: (value: string) => void;
}

const FilterInput = ({ onSearch, ...props }: FilterInputProps) => {
  return <Search {...props} onSearch={onSearch} enterButton />;
};

export default FilterInput;
