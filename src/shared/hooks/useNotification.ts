import { notification as AntDNotification } from 'antd';
import { useEffect } from 'react';

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

export const useNotification = () => {
  const [api, contextHolder] = AntDNotification.useNotification();
  const { notification } = useGlobalReducer();

  useEffect(() => {
    if (notification?.message && notification.type) {
      api[notification.type]({
        message: `${notification.message}`,
        description: notification.description,
        placement: 'bottomRight',
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};
