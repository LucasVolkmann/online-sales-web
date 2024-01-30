import { Button } from 'antd/es/radio';
import { useNavigate } from 'react-router-dom';

import { unsetAuthorizationToken } from '../../../shared/functions/connection/auth';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { LoginRoutesEnum } from '../../login/routes';

export const ProductsScreen = () => {
  const { setNotification, user } = useGlobalContext();
  const navigate = useNavigate();

  const logoff = () => {
    setNotification({
      message: 'Exiting...',
      type: 'success',
    });
    unsetAuthorizationToken();
    navigate(LoginRoutesEnum.LOGIN);
  };

  return (
    <>
      <p>This is the Products screen</p>
      <p>Welcome {user?.name}</p>
      <Button onClick={logoff}>logoff</Button>
    </>
  );
};
