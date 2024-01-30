import { RouteObject } from 'react-router-dom';

import FirstScreen from '.';
import PageNotFoundScreen from './screens/PageNotFoundScreen';

export enum FirstScreenEnum {
  FIRST_PAGE = '/',
}

export const firstScreenRouter: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <PageNotFoundScreen />,
  },
];
