import { TableColumnsType } from 'antd';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import {
  DisplayFlexJCSpaceAround,
  DisplayFlexJCSpaceBetween,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { numberToCurrency } from '../../../shared/functions/numberToCurrency';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryItem from '../components/CategoryItem';
import FilterInput from '../components/FilterInput';
import TooltipImage from '../components/TooltipImage';
import { useProducts } from '../hooks/useProducts';
import { ProductRoutesEnum } from '../routes';

const breadcrumbList = [
  {
    name: 'HOME',
  },
  {
    name: 'PRODUTOS',
  },
];

export const ProductsScreen = () => {
  const { handleOnSearch, handleOnClickInsert, filtProducts, handleOnClickDelete } = useProducts();
  const navigate = useNavigate();

  const columns: TableColumnsType<ProductType> = useMemo(() => {
    return [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (_, product) => <TooltipImage product={product} />,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a style={{ fontSize: '1.25em' }}>{text}</a>,
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Categoria',
        dataIndex: 'category',
        key: 'category',
        render: (_, product) => <CategoryItem category={product.category} />,
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => <a>{numberToCurrency(price)}</a>,
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Actions',
        dataIndex: '',
        key: 'x',
        render: (_, product) => (
          <DisplayFlexJCSpaceAround>
            <a
              style={{ textDecoration: 'underline', color: 'orange', marginRight: '10px' }}
              onClick={() => navigate(`${ProductRoutesEnum.PRODUCT_UPDATE}/${product.id}`)}
            >
              Editar
            </a>
            <a
              style={{ textDecoration: 'underline', color: 'red' }}
              onClick={() => handleOnClickDelete(product.id)}
            >
              Deletar
            </a>
          </DisplayFlexJCSpaceAround>
        ),
      },
    ];
  }, []);

  return (
    <>
      <Screen listBreadcrumb={breadcrumbList} menuCurrentPage="product">
        <DisplayFlexJCSpaceBetween margin="0px 0px 24px">
          <LimitedContainer width="300px">
            <FilterInput placeholder="Buscar Produto" onSearch={handleOnSearch}></FilterInput>
          </LimitedContainer>

          <LimitedContainer width="250px">
            <Button type="primary" onClick={handleOnClickInsert}>
              Adicionar um novo produto
            </Button>
          </LimitedContainer>
        </DisplayFlexJCSpaceBetween>

        <Table columns={columns} dataSource={filtProducts} />
      </Screen>
    </>
  );
};
