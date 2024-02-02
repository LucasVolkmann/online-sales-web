import { RouteObject } from 'react-router-dom';

import ProductsScreen from '.';
import InsertProductScreen from './screens/InsertProductScreen';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
}

export const productRoutes: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <ProductsScreen />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_INSERT,
    element: <InsertProductScreen />,
  },
];
