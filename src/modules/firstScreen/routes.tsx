import { RouteObject } from 'react-router-dom';

import FirstScreen from '.';

export const firstScreenRouter: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <div>Error</div>,
  },
];
