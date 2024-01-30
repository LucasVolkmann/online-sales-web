import { LoginRoutesEnum } from '../../../modules/login/routes';
import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/Urls';
import { connectionAPI_GET } from './connectionAPI';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const unsetAuthorizationToken = () => unsetItemStorage(AUTHORIZATION_KEY);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = (setUser: (user: UserType) => void, user?: UserType) => {
  if (!getAuthorizationToken()) {
    location.href = LoginRoutesEnum.LOGIN;
  }
  if (!user) {
    connectionAPI_GET<UserType>(URL_USER)
      .then((responseUser) => {
        setUser(responseUser);
      })
      .catch(() => {
        unsetAuthorizationToken();
        location.href = LoginRoutesEnum.LOGIN;
      });
  }
  return null;
};
