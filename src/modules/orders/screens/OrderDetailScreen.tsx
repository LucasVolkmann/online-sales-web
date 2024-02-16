import { Badge, DescriptionsProps, Divider } from 'antd';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screens/Screen';
import Descriptions from '../../../shared/components/tables/Descriptions';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';

const userItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    span: 2,
    children: 'root',
  },
  {
    key: '2',
    label: 'CPF',
    children: '12345678901',
  },
  {
    key: '3',
    label: 'E-mail',
    span: 2,
    children: 'root@root.com',
  },
  {
    key: '4',
    label: 'Telefone',
    children: '31925325252',
  },
];
const paymentItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Status',
    children: <Badge status="processing" text="Running" />,
  },
  {
    key: '2',
    label: 'Tipo',
    span: 2,
    children: 'payment_mock_type',
  },
  {
    key: '3',
    label: 'Preço',
    children: '787878',
  },
  {
    key: '4',
    label: 'Desconto',
    span: 2,
    children: '78',
  },
  {
    key: '5',
    label: 'Preço final',
    children: '787800',
  },
];
const addressItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'CEP',
    span: 2,
    children: '54321',
  },
  {
    key: '2',
    label: 'Número',
    children: '12345',
  },
  {
    key: '3',
    label: 'Cidade',
    span: 2,
    children: 'Afonso Cláudio',
  },
  {
    key: '4',
    label: 'Estado',
    children: 'Espírito Santo',
  },
  {
    key: '5',
    label: 'Complemento',
    children: 'Nenhum Complemento',
  },
];
const productItems: DescriptionsProps['items'] = [];

const OrderDetailScreen = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { detailedOrder } = useOrderDetail(orderId);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: 'DETALHES',
        },
      ]}
    >
      <Descriptions title="Dados do Usuário" items={userItems} />
      <Divider />
      <Descriptions title="Dados de Pagamento" items={paymentItems} />
      <Divider />
      <Descriptions title="Dados do Endereço" items={addressItems} />
      <Divider />
      <Descriptions title="Lista de Produtos" items={productItems} />
    </Screen>
  );
};

export default OrderDetailScreen;
