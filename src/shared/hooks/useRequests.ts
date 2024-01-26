import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

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
      .then((res) => res.data)
      .catch(() => alert('Invalid credentials.'));
    setLoading(false);
    return response;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
