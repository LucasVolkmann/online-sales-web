import { NavigateFunction, redirect } from 'react-router-dom';

import { LoginRoutesEnum } from '../../../modules/login/routes';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/Urls';
import { UserTokenType } from '../../types/UserTokenType';
import { UserType } from '../../types/UserType';
import { connectionAPI_GET } from './connectionAPI';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const unsetAuthorizationToken = () => unsetItemStorage(AUTHORIZATION_KEY);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const getTokenUserData = (): UserTokenType | undefined => {
  const token = getAuthorizationToken();
  if (token) {
    const splitToken = token.split('.');
    if (splitToken.length > 1) {
      return JSON.parse(window.atob(splitToken[1]));
    }
  }

  return undefined;
};

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
