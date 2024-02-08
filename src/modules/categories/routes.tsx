import { RouteObject } from 'react-router-dom';

import Category from '.';
import InsertCategory from './screens/InsertCategory';

export enum CategoryEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
}

export const categoryRouter: RouteObject[] = [
  {
    path: CategoryEnum.CATEGORY,
    element: <Category />,
  },
  {
    path: CategoryEnum.CATEGORY_INSERT,
    element: <InsertCategory />,
  },
];
