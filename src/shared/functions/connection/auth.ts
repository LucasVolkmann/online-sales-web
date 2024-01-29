import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const unsetAuthorizationToken = () => unsetItemStorage(AUTHORIZATION_KEY);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);
