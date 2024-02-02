import { TableColumnsType } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import Table from '../../../shared/components/tables/Table';
import { URL_PRODUCT } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { numberToCurrency } from '../../../shared/functions/numberToCurrency';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryItem from '../components/CategoryItem';
import TooltipImage from '../components/TooltipImage';
import { ProductRoutesEnum } from '../routes';

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
    render: (price: number) => <a>{numberToCurrency(price)}</a>,
  },
];

export const ProductsScreen = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  return (
    <>
      <Screen
        listBreadcrumb={[
          {
            name: 'HOME',
          },
          {
            name: 'PRODUTOS',
          },
        ]}
      >
        <Button onClick={handleOnClickInsert}>Inserir</Button>
        <Table
          columns={columns}
          dataSource={products.map((p) => {
            return { ...p, key: p.id };
          })}
        />
      </Screen>
    </>
  );
};
