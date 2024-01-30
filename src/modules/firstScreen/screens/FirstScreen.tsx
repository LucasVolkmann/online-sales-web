import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/Urls';
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from '../../../shared/functions/connection/auth';
import { connectionAPI_GET } from '../../../shared/functions/connection/connectionAPI';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { LoginRoutesEnum } from '../../login/routes';
import { UserType } from '../../login/types/UserType';
import { ProductRoutesEnum } from '../../products/routes';

export const FirstScreen = () => {
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      (async () => {
        await connectionAPI_GET<UserType>(URL_USER)
          .then((res) => {
            setNotification({
              message: `Welcome ${res.name}`,
              type: 'success',
            });
            navigate(ProductRoutesEnum.PRODUCT);
          })
          .catch(() => {
            setNotification({
              message: 'You must be logged in to enter.',
              type: 'info',
            });
            unsetAuthorizationToken();
            navigate(LoginRoutesEnum.LOGIN);
          });
      })();
    } else {
      navigate(LoginRoutesEnum.LOGIN);
    }
  }, []);

  return (
    <div
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Spin size="large" />
    </div>
  );
};
