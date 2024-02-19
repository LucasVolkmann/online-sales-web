import { useEffect } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useUser = () => {
  const { request } = useRequests();
  const { users, setUsers } = useUserReducer();

  useEffect(() => {
    if (users.length <= 0) {
      request(URL_USER_ALL, MethodsEnum.GET, setUsers);
    }
  }, []);

  return { users };
};
