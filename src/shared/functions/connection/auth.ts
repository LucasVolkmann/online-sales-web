import { NavigateFunction, redirect } from 'react-router-dom';

import { LoginRoutesEnum } from '../../../modules/login/routes';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/Urls';
import { UserType } from '../../types/UserType';
import { connectionAPI_GET } from './connectionAPI';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const unsetAuthorizationToken = () => unsetItemStorage(AUTHORIZATION_KEY);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
  if (!getAuthorizationToken()) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  await connectionAPI_GET<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    return redirect(LoginRoutesEnum.LOGIN);
  });
  return null;
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(LoginRoutesEnum.LOGIN);
};
