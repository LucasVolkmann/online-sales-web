import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/products/routes';
import { URL_AUTH } from '../constants/Urls';
import { MethodsEnum } from '../enumerations/methods.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, { connectionAPI_POST } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();

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

  const authRequest = async (body: any): Promise<void> => {
    setLoading(true);
    await connectionAPI_POST<AuthType>(URL_AUTH, body)
      .then((result) => {
        if (result.accessToken) {
          setAuthorizationToken(result.accessToken);
          setNotification({
            message: 'Entering...',
            type: 'success',
          });
        } else {
          throw new Error('Server Error.');
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
