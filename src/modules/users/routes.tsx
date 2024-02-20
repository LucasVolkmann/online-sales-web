import { RouteObject } from 'react-router-dom';

import UserScreen from './';
import InsertAdminScreen from './screens/InsertAdminScreen';

export enum UserRoutesEnum {
  USER = '/user',
  USER_INSERT = '/user/insert',
}

export const userRoutes: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <UserScreen />,
  },
  {
    path: UserRoutesEnum.USER_INSERT,
    element: <InsertAdminScreen />,
  },
];
