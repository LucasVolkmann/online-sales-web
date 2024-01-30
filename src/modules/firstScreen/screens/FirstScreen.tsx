import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../../products/routes';

export const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();

  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
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
