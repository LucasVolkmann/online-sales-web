import { TableColumnsType } from 'antd';

import Screen from '../../../shared/components/screens/Screen';
import Table from '../../../shared/components/tables/Table';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrder } from '../hooks/useOrder';

const columns: TableColumnsType<OrderType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    render: (_, order) => <a>{order.user.name}</a>,
  },
  {
    title: 'Quantidade de Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const OrderScreen = () => {
  const { orders } = useOrder();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
        },
      ]}
    >
      <Table columns={columns} dataSource={orders} />
    </Screen>
  );
};

export default OrderScreen;
