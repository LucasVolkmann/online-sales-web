import { LoginRoutesEnum } from '../../../modules/login/routes';
import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/Urls';
import { connectionAPI_GET } from './connectionAPI';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const unsetAuthorizationToken = () => unsetItemStorage(AUTHORIZATION_KEY);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
  if (!getAuthorizationToken()) {
    location.href = LoginRoutesEnum.LOGIN;
  }
  await connectionAPI_GET<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    location.href = LoginRoutesEnum.LOGIN;
  });
  return null;
};
