import { RouteObject } from 'react-router-dom';

import LoginScreen from '.';

export const loginRouter: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];
