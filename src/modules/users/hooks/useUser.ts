import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_ALL } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { UserTypeEnum } from '../../../shared/enumerations/userType.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { UserTokenType } from '../../../shared/types/UserTokenType';
import { UserType } from '../../../shared/types/UserType';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { UserRoutesEnum } from '../routes';

export const useUser = () => {
  const navigate = useNavigate();
  const { request } = useRequests();
  const { users, setUsers } = useUserReducer();
  const [filtUsers, setFiltUsers] = useState<UserType[]>([]);

  useEffect(() => {
    if (users.length <= 0) {
      request(URL_USER_ALL, MethodsEnum.GET, setUsers);
    }
  }, []);

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

  return { filtUsers, handleOnSearch, handleInsertAdminOnClick };
};
