import Search from 'antd/es/input/Search';

interface FilterInputProps {
  onSearch: (value: string) => void;
}

const FilterInput = ({ onSearch }: FilterInputProps) => {
  return <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />;
};

export default FilterInput;
