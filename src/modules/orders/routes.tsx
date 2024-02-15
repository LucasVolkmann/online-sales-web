import { RouteObject } from 'react-router-dom';

import OrderScreen from './';

export enum OrderRoutesEnum {
  ORDER = '/order',
}

export const orderRoutes: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <OrderScreen />,
  },
];
