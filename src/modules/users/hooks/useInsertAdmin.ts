import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_ADMIN } from '../../../shared/constants/Urls';
import { InsertAdminDTOType } from '../../../shared/dtos/InsertAdminDTOType';
import { connectionAPI_POST } from '../../../shared/functions/connection/connectionAPI';
import { UserType } from '../../../shared/types/UserType';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { UserRoutesEnum } from '../routes';

export const useInsertAdmin = () => {
  const [insertAdmin, setUser] = useState<InsertAdminDTOType>({
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
    const { name, cpf, email, password, phone } = insertAdmin;
    if (name && cpf && email && password && phone) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [insertAdmin]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUser({
      ...insertAdmin,
      [field]: event.target.value,
    });
  };

  const handleOnClick = async () => {
    setLoading(true);
    await connectionAPI_POST<UserType>(URL_USER_ADMIN, insertAdmin)
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
    insertAdmin,
    handleOnClick,
  };
};
