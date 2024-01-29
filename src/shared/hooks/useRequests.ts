import axios from 'axios';
import { useState } from 'react';

import { connectionAPI_POST } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

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

  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const response = await connectionAPI_POST(url, body)
      .then((res) => {
        setNotification({
          message: 'Entering...',
          type: 'success',
        });
        return res;
      })
      .catch((error: Error) => {
        setNotification({
          message: error.message,
          type: 'error',
        });
      });
    setLoading(false);
    return response;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
