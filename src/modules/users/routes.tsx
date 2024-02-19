import { RouteObject } from 'react-router-dom';

import UserScreen from './';

export enum UserRoutesEnum {
  USER = '/user',
}

export const userRoutes: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <UserScreen />,
  },
];
