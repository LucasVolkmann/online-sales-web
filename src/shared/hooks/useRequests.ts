import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/products/routes';
import { URL_AUTH } from '../constants/Urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectionAPI_POST } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();

  const getRequest = async (url: string) => {
    setLoading(true);
    const response = await axios({
      method: 'get',
      url: url,
    })
      .then((res) => res.data)
      .catch(() => alert('Invalid credentials.'));
    setLoading(false);
    return response;
  };

  const postRequest = async <T>(url: string, body: any): Promise<T | void> => {
    setLoading(true);
    return await connectionAPI_POST<T>(url, body)
      .then((res) => {
        setNotification({
          message: 'Entering...',
          type: 'success',
        });
        setLoading(false);
        return res;
      })
      .catch((error: Error) => {
        setNotification({
          message: error.message,
          type: 'error',
        });
        setLoading(false);
        return;
      });
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
    getRequest,
    postRequest,
    authRequest,
  };
};
