import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductRoutesEnum } from '../../modules/products/routes';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { URL_PRODUCT } from '../constants/Urls';
import { InsertProductDTOType } from '../dtos/InsertProductDTOType.dto';
import { connectionAPI_POST } from '../functions/connection/connectionAPI';
import { ProductType } from '../types/ProductType';

export const useInsertProduct = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [insertProduct, setInsertProduct] = useState<InsertProductDTOType>({
    name: '',
    image: '',
    price: 0,
  });

  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();

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
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((err) => {
        setNotification({
          message: 'Erro ao inserir produto.',
          type: 'error',
          description: err.message,
        });
      });
    setLoading(false);
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
