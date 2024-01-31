import { useEffect } from 'react';

import { URL_PRODUCT } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../types/ProductType';

export const ProductsScreen = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  return (
    <>
      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
