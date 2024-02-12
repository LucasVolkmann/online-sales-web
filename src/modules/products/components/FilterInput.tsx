import { Input } from 'antd';

const { Search } = Input;

interface FilterInputProps {
  onSearch: (value: string) => void;
}

const FilterInput = ({ onSearch, ...props }: FilterInputProps) => {
  return <Search {...props} onSearch={onSearch} enterButton />;
};

export default FilterInput;
