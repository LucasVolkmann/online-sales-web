import { useDispatch } from 'react-redux';

import NotificationType from '../../../shared/types/NotificationType';
import { UserType } from '../../../shared/types/UserType';
import { useAppSelector } from '../../hooks';
import { setNotificationAction, setUserAction } from '.';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const { user, notification } = useAppSelector((state) => state.globalReducer);

  const setNotification = (notification: NotificationType) => {
    dispatch(setNotificationAction(notification));
  };

  const setUser = (user: UserType) => {
    dispatch(setUserAction(user));
  };

  return {
    user,
    notification,
    setNotification,
    setUser,
  };
};
