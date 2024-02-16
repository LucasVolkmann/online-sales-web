import { RouteObject } from 'react-router-dom';

import OrderScreen from './';
import OrderDetailScreen from './screens/OrderDetailScreen';

export enum OrderRoutesEnum {
  ORDER = '/order',
  ORDER_ID = '/order/id',
}

export const orderRoutes: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <OrderScreen />,
  },
  {
    path: OrderRoutesEnum.ORDER_ID,
    element: <OrderDetailScreen />,
  },
];
