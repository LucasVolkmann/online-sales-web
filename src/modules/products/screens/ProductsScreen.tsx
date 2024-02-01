import { TableColumnsType } from 'antd';
import { useEffect } from 'react';

import Table from '../../../shared/components/tables/Table';
import { URL_PRODUCT } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryItem from '../components/CategoryItem';
import TooltipImage from '../components/TooltipImage';

const columns: TableColumnsType<ProductType> = [
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
    render: (text: number) => (
      <a>{text.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</a>
    ),
  },
];

export const ProductsScreen = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={products.map((p) => {
          return { ...p, key: p.id };
        })}
      />
    </>
  );
};
