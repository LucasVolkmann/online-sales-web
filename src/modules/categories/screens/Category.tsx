import { TableColumnsType } from 'antd';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import FilterInput from '../../products/components/FilterInput';
import { useCategory } from '../hooks/useCategory';

const columns: TableColumnsType<CategoryType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Quantidade de Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const Category = () => {
  const { handleOnClickInsert, handleOnSearch, displayCategories } = useCategory();

  return (
    <Screen listBreadcrumb={[{ name: 'HOME' }, { name: 'CATEGORIAS' }]} menuCurrentPage="category">
      <DisplayFlexJCSpaceBetween margin="0px 0px 24px">
        <LimitedContainer width="300px">
          <FilterInput placeholder="Buscar Categoria" onSearch={handleOnSearch} />
        </LimitedContainer>

        <LimitedContainer width="250px">
          <Button type="primary" onClick={handleOnClickInsert}>
            Adicionar uma nova categoria
          </Button>
        </LimitedContainer>
      </DisplayFlexJCSpaceBetween>

      <Table
        columns={columns}
        dataSource={displayCategories.map((p) => {
          return { ...p, key: p.id };
        })}
      />
    </Screen>
  );
};

export default Category;
