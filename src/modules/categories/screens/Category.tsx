import { TableColumnsType } from 'antd';
import { useEffect } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceAround } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
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
  const { setCategories } = useCategoryReducer();
  const { request } = useRequests();
  const {
    categories,
    handleOnClickInsert,
    handleOnSearch,
    displayCategories,
    setDisplayCategories,
  } = useCategory();

  useEffect(() => {
    request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  useEffect(() => {
    setDisplayCategories([...categories]);
  }, [categories]);

  return (
    <Screen listBreadcrumb={[{ name: 'HOME' }, { name: 'CATEGORIAS' }]}>
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
        dataSource={displayCategories.map((p) => {
          return { ...p, key: p.id };
        })}
      />
    </Screen>
  );
};

export default Category;
