import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { connectionAPI_POST } from '../../../shared/functions/connection/connectionAPI';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryEnum } from '../routes';

export const useInsertCategory = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState('');
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name]);

  const handleOnClick = async () => {
    setLoading(true);

    await connectionAPI_POST<CategoryType>(URL_CATEGORY, { name })
      .then((res) => {
        setNotification({
          message: 'Categoria Criada!',
          type: 'success',
          description: `A categoria '${res?.name}' foi criada com sucesso!`,
        });
        setLoading(false);
        navigate(CategoryEnum.CATEGORY);
      })
      .catch((err) => {
        setNotification({
          message: err.message,
          type: 'error',
        });
        setLoading(false);
      });
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return {
    name,
    loading,
    disabled,
    handleOnClick,
    handleOnChangeName,
  };
};
