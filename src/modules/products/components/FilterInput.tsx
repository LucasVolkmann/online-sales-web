import Search, { SearchProps } from 'antd/es/input/Search';

interface FilterInputProps extends SearchProps {
  onSearch: (value: string) => void;
}

const FilterInput = ({ onSearch, ...props }: FilterInputProps) => {
  return <Search {...props} onSearch={onSearch} enterButton />;
};

export default FilterInput;
