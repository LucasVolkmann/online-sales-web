import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserTypeEnum } from '../../../shared/enumerations/userType.enum';
import { UserTokenType } from '../../../shared/types/UserTokenType';
import { UserType } from '../../../shared/types/UserType';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { UserRoutesEnum } from '../routes';

export const useUser = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useUserReducer();
  const [filtUsers, setFiltUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setFiltUsers(users);
  }, [users]);

  const handleOnSearch = (value: string) => {
    if (!value) {
      setFiltUsers(users);
    } else {
      setFiltUsers(users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())));
    }
  };

  const handleInsertAdminOnClick = (userData: UserTokenType) => {
    if (userData?.typeUser == UserTypeEnum.ROOT) {
      navigate(UserRoutesEnum.USER_INSERT);
    }
  };

  return { filtUsers, setFiltUsers, users, setUsers, handleOnSearch, handleInsertAdminOnClick };
};
