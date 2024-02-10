import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/products/routes';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { URL_AUTH } from '../constants/Urls';
import { MethodsEnum } from '../enumerations/methods.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, { connectionAPI_POST } from '../functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalReducer();
  // const navigate = useNavigate();

  const request = async <T>(
    url: string,
    method: MethodsEnum,
    saveGlobal: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const response: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((res) => {
        if (saveGlobal) {
          saveGlobal(res);
        }
        return res;
      })
      .catch((error: Error) => {
        setNotification({
          message: error.message,
          type: 'error',
        });
        return undefined;
      });

    setLoading(false);
    return response;
  };

  const authRequest = async (navigate: NavigateFunction, body: any): Promise<void> => {
    setLoading(true);
    await connectionAPI_POST<AuthType>(URL_AUTH, body)
      .then((result) => {
        if (result.accessToken) {
          setUser(result.user);
          setAuthorizationToken(result.accessToken);
        } else {
          throw new Error('Server error.');
        }
        navigate(ProductRoutesEnum.PRODUCT);
        return;
      })
      .catch((error) => {
        setNotification({
          message: error.message,
          type: 'error',
        });
        return;
      });
    setLoading(false);
  };

  return {
    loading,
    request,
    authRequest,
  };
};
