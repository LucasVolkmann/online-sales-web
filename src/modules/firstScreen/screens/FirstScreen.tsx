import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRoutesEnum } from '../../products/routes';

export const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalReducer();

  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    }
  }, [user]);

  return (
    <div
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Spin size="large" />
    </div>
  );
};
