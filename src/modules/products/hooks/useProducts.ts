import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRoutesEnum } from '../routes';

export const useProducts = () => {
  const { setNotification } = useGlobalReducer();
  const { products, setProducts } = useProductReducer();
  const [filtProducts, setFiltProducts] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setFiltProducts([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const handleOnSearch = (value: string) => {
    if (!value) {
      setFiltProducts([...products]);
    } else {
      setFiltProducts([
        ...products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())),
      ]);
    }
  };

  const handleOnClickDelete = async (productId: number) => {
    await request(URL_PRODUCT_ID.replace('{productId}', `${productId}`), MethodsEnum.DELETE).then(
      () => {
        setNotification({
          message: 'Produto excluído com sucesso!',
          type: 'success',
        });
      },
    );
    await request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  return {
    handleOnSearch,
    handleOnClickInsert,
    filtProducts,
    handleOnClickDelete,
  };
};
