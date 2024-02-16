import { useDispatch } from 'react-redux';

import { OrderType } from '../../../shared/types/OrderType';
import { useAppSelector } from '../../hooks';
import { setDetailedOrderAction, setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders, detailedOrder } = useAppSelector((state) => state.orderReducer);

  const setOrders = (orders: OrderType[]) => {
    dispatch(setOrdersAction(orders));
  };

  const setDetailedOrder = (detailedOrder: OrderType) => {
    dispatch(setDetailedOrderAction(detailedOrder));
  };

  return {
    orders,
    detailedOrder,
    setOrders,
    setDetailedOrder,
  };
};
