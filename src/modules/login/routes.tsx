import { RouteObject } from 'react-router-dom';

import LoginScreen from '.';

export enum LoginRoutesEnum {
  LOGIN = '/login',
}

export const loginRouter: RouteObject[] = [
  {
    path: LoginRoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];
