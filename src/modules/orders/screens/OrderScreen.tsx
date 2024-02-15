import Screen from '../../../shared/components/screens/Screen';
import { useOrder } from '../hooks/useOrder';

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
      <ul>
        {orders.map((order) => {
          return <li key={order.id}>{order.date}</li>;
        })}
      </ul>
    </Screen>
  );
};

export default OrderScreen;
