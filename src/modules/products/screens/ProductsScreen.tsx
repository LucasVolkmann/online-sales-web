import { TableColumnsType } from 'antd';
import { useEffect, useState } from 'react';
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
import FilterInput from '../components/FilterInput';
import TooltipImage from '../components/TooltipImage';
import { ProductRoutesEnum } from '../routes';
import {
  FilterInputContainer,
  HeaderContainer,
  InsertButtonContainer,
} from '../styles/productScreen.styles';

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
];

const breadcrumbList = [
  {
    name: 'HOME',
  },
  {
    name: 'PRODUTOS',
  },
];

export const ProductsScreen = () => {
  const { products, setProducts } = useDataContext();
  const [filtProducts, setFiltProducts] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setFiltProducts([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const handleOnSearch = (value: string) => {
    if (!value) {
      setFiltProducts([...products]);
    } else {
      setFiltProducts([
        ...products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())),
      ]);
    }
  };

  return (
    <>
      <Screen listBreadcrumb={breadcrumbList}>
        <HeaderContainer>
          <FilterInputContainer>
            <FilterInput onSearch={handleOnSearch}></FilterInput>
          </FilterInputContainer>
          <InsertButtonContainer>
            <Button type="primary" onClick={handleOnClickInsert}>
              Adicionar um novo produto
            </Button>
          </InsertButtonContainer>
        </HeaderContainer>
        <Table
          columns={columns}
          dataSource={filtProducts.map((p) => {
            return { ...p, key: p.id };
          })}
        />
      </Screen>
    </>
  );
};
