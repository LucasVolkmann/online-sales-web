import { RouteObject } from 'react-router-dom';

import Category from '.';

export enum CategoryEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
}

export const categoryRouter: RouteObject[] = [
  {
    path: CategoryEnum.CATEGORY,
    element: <Category />,
  },
];
