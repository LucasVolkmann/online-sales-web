import { RouteObject } from 'react-router-dom';

import ProductsScreen from '.';
import InsertProductScreen from './screens/InsertProductScreen';
import UpdateProductScreen from './screens/UpdateProductScreen';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
  PRODUCT_UPDATE = '/product/update',
  PRODUCT_UPDATE_ID = '/product/update/:productId',
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
  {
    path: ProductRoutesEnum.PRODUCT_UPDATE_ID,
    element: <UpdateProductScreen />,
  },
];
