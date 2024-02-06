import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductRoutesEnum } from '../../modules/products/routes';
import { URL_PRODUCT } from '../constants/Urls';
import { InsertProductDTOType } from '../dtos/InsertProductDTOType.dto';
import { connectionAPI_POST } from '../functions/connection/connectionAPI';
import { ProductType } from '../types/ProductType';
import { useGlobalContext } from './useGlobalContext';

export const useInsertProduct = () => {
  const [insertProduct, setInsertProduct] = useState<InsertProductDTOType>({
    name: '',
    image: '',
    price: 0,
  });
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      insertProduct.name &&
      insertProduct.image &&
      insertProduct.categoryId &&
      insertProduct.price > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [insertProduct]);

  const handleOnClick = async () => {
    setLoading(true);
    await connectionAPI_POST<ProductType>(URL_PRODUCT, insertProduct)
      .then((res) => {
        setNotification({
          message: 'Sucesso!',
          type: 'success',
          description: `O produto '${res.name}' foi inserido com sucesso!`,
        });
        setLoading(false);
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((err) => {
        setNotification({
          message: 'Erro ao inserir produto.',
          type: 'error',
          description: err.message,
        });
        setLoading(false);
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    isNumeric?: boolean,
  ) => {
    setInsertProduct({
      ...insertProduct,
      [value]: isNumeric ? Number(event.target.value) : event.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setInsertProduct({
      ...insertProduct,
      categoryId: Number(value),
    });
  };

  return {
    handleOnClick,
    handleInputChange,
    handleSelectChange,
    insertProduct,
    loading,
    disabled,
  };
};
