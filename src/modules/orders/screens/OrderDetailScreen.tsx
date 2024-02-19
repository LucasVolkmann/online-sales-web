import { Badge, Divider, Spin } from 'antd';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
const { Title } = Typography;

import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.style';
import Descriptions from '../../../shared/components/tables/Descriptions';
import { maskCEP } from '../../../shared/functions/address';
import { maskCpf } from '../../../shared/functions/cpf';
import { numberToCurrency } from '../../../shared/functions/numberToCurrency';
import { maskPhone } from '../../../shared/functions/phone';
import OrderProductList from '../components/OrderProductsList';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';

type badgeTypes = 'default' | 'success' | 'processing' | 'warning' | 'error' | undefined;

const PaymentStatusAntDBadge: badgeTypes[] = [
  'default',
  'success',
  'processing',
  // 'error',
  // 'warning'
];

const OrderDetailScreen = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { detailedOrder, loading } = useOrderDetail(orderId);

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
      {!detailedOrder || loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <h4 style={{ textAlign: 'center', color: 'gray' }}>
            <span style={{ textDecoration: 'underline', color: 'black' }}>Data:</span>{' '}
            {detailedOrder?.date}
          </h4>
          <Descriptions
            bordered={true}
            title="Dados do Usuário"
            items={[
              {
                key: '1',
                label: 'Nome',
                span: 2,
                children: detailedOrder.user?.name,
              },
              {
                key: '2',
                label: 'CPF',
                children: maskCpf(detailedOrder.user?.cpf),
              },
              {
                key: '3',
                label: 'E-mail',
                span: 2,
                children: detailedOrder.user?.email,
              },
              {
                key: '4',
                label: 'Telefone',
                children: maskPhone(detailedOrder.user?.phone),
              },
            ]}
          />
          <Divider />
          <Descriptions
            bordered={true}
            title="Dados de Pagamento"
            items={[
              {
                key: '1',
                label: 'Status',
                children: (
                  <Badge
                    status={PaymentStatusAntDBadge[detailedOrder.payment?.paymentStatus?.id || 0]}
                    text={detailedOrder.payment?.paymentStatus?.name}
                  />
                ),
              },
              {
                key: '2',
                label: 'Tipo',
                span: 2,
                children: detailedOrder.payment?.type,
              },
              {
                key: '3',
                label: 'Preço',
                children: numberToCurrency(detailedOrder.payment?.price || 0),
              },
              {
                key: '4',
                label: 'Desconto',
                span: 2,
                children: numberToCurrency(detailedOrder.payment?.discount || 0),
              },
              {
                key: '5',
                label: 'Preço final',
                children: numberToCurrency(detailedOrder.payment?.finalPrice || 0),
              },
            ]}
          />
          <Divider />
          <Descriptions
            bordered={true}
            title="Dados do Endereço"
            items={[
              {
                key: '1',
                label: 'CEP',
                span: 2,
                children: maskCEP(detailedOrder.address?.cep || ''),
              },
              {
                key: '2',
                label: 'Número',
                children: detailedOrder.address?.numberAddress,
              },
              {
                key: '3',
                label: 'Cidade',
                span: 2,
                children: detailedOrder.address?.city?.name,
              },
              {
                key: '4',
                label: 'Estado',
                children: detailedOrder.address?.city?.state?.name,
              },
              {
                key: '5',
                label: 'Complemento',
                children: detailedOrder.address?.complement,
              },
            ]}
          />
          <Divider />
          <Title level={5}>Lista de produtos</Title>
          <OrderProductList orderProducts={detailedOrder.ordersProduct} />
        </>
      )}
    </Screen>
  );
};

export default OrderDetailScreen;
