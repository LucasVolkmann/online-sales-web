import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/Urls';
import { InsertUserDTOType } from '../../../shared/dtos/InsertUserDTOType';
import { connectionAPI_POST } from '../../../shared/functions/connection/connectionAPI';
import { UserType } from '../../../shared/types/UserType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { UserRoutesEnum } from '../routes';

export const useInsertUser = () => {
  const [insertUser, setUser] = useState<InsertUserDTOType>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const { name, cpf, email, password, phone } = insertUser;
    if (name && cpf && email && password && phone) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [insertUser]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUser({
      ...insertUser,
      [field]: event.target.value,
    });
  };

  const handleOnClick = async () => {
    setLoading(true);
    await connectionAPI_POST<UserType>(URL_USER, insertUser)
      .then((res) => {
        setNotification({
          message: `Usuário '${res.name}' foi criado com sucesso!`,
          type: 'success',
        });
        navigate(UserRoutesEnum.USER);
      })
      .catch((err) => {
        setNotification({
          message: `Erro ao criar um novo usuário!`,
          type: 'error',
          description: err.description,
        });
      });
    setLoading(false);
  };

  return {
    disabled,
    loading,
    handleOnChange,
    insertUser,
    handleOnClick,
  };
};
