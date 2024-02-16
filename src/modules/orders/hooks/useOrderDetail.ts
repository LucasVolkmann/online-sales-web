import { useEffect } from 'react';

import { URL_ORDER } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrderDetail = (orderId?: string) => {
  const { detailedOrder, setDetailedOrder } = useOrderReducer();
  const { request, loading } = useRequests();
  const { setNotification } = useGlobalReducer();

  useEffect(() => {
    if (Number.isInteger(Number(orderId))) {
      request(`${URL_ORDER}/${orderId || ''}`, MethodsEnum.GET, setDetailedOrder);
    } else {
      setNotification({
        message: 'Erro ao buscar o pedido!',
        type: 'error',
      });
    }
  }, []);

  return {
    loading,
    detailedOrder,
  };
};
