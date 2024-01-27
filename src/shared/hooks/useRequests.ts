import axios from 'axios';
import { useState } from 'react';

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
    const response = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((res) => {
        setNotification({
          message: 'Entering...',
          type: 'success',
          description: 'Login has been successful.',
        });
        return res;
      })
      .catch(() => {
        setNotification({
          message: 'Error.',
          type: 'error',
          description: 'Wrong credentials.',
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
