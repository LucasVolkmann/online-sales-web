import { TableColumnsType } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceAround } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import FilterInput from '../../products/components/FilterInput';
import { useCategory } from '../hooks/useCategory';
import { CategoryEnum } from '../routes';

const listBreadcrumb = [{ name: 'HOME' }, { name: 'CATEGORIES' }];

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
  const { products, setCategories } = useDataContext();
  const { request } = useRequests();
  const { categories } = useCategory();
  const navigate = useNavigate();

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, [products]);

  const handleOnSearch = (value: string) => {
    console.log(value);
  };

  const handleOnClickInsert = () => {
    navigate(CategoryEnum.CATEGORY_INSERT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJCSpaceAround margin="0px 0px 24px">
        <LimitedContainer width="300px">
          <FilterInput placeholder="Buscar Categoria" onSearch={handleOnSearch} />
        </LimitedContainer>

        <LimitedContainer width="250px">
          <Button type="primary" onClick={handleOnClickInsert}>
            Adicionar uma nova categoria
          </Button>
        </LimitedContainer>
      </DisplayFlexJCSpaceAround>

      <Table
        columns={columns}
        dataSource={categories.map((p) => {
          return { ...p, key: p.id };
        })}
      />
    </Screen>
  );
};

export default Category;
