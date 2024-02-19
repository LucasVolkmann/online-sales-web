import { Empty, TableColumnsType } from 'antd';

import Table from '../../../shared/components/tables/Table';
import { numberToCurrency } from '../../../shared/functions/numberToCurrency';
import { OrderProductType } from '../../../shared/types/OrderProductType';

const columns: TableColumnsType<OrderProductType> = [
  {
    title: 'Nome do Produto',
    dataIndex: 'name',
    key: 'name',
    render: (_, target) => <a>{target.product?.name}</a>,
  },
  {
    title: 'Quantidade de Produtos',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, target) => <a>{numberToCurrency(target.product?.price || 0)}</a>,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (_, target) => <a>{numberToCurrency((target.product?.price || 0) * target.amount)}</a>,
  },
];

interface OrderProductListProps {
  orderProducts?: OrderProductType[];
}

const OrderProductList = ({ orderProducts }: OrderProductListProps) => {
  if (orderProducts?.length === 0) {
    return <Empty description="Nenhum produto encontrado" />;
  }

  return <Table columns={columns} dataSource={orderProducts} />;
};

export default OrderProductList;
