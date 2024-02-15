import { redirect } from 'react-router-dom';

import { LoginRoutesEnum } from '../../../../modules/login/routes';
import { AUTHORIZATION_KEY } from '../../../constants/authorizationConstants';
import { URL_USER } from '../../../constants/Urls';
import {
  getAuthorizationToken,
  logout,
  setAuthorizationToken,
  unsetAuthorizationToken,
  verifyLoggedIn,
} from '../auth';
import { connectionAPI_GET } from '../connectionAPI';
import { getItemStorage, setItemStorage, unsetItemStorage } from '../storageProxy';

const MOCK_AUTHORIZATION_KEY = AUTHORIZATION_KEY;
const MOCK_TOKEN = 'MOCK_AUTHORIZATION_KEY';

jest.mock('../storageProxy');
jest.mock('react-router-dom');
jest.mock('../connectionAPI');

const mockGetItemStorage = getItemStorage as jest.Mock<any>;
const mockConnectionAPI_GET = connectionAPI_GET as jest.Mock<any>;

describe('Test auth', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Test [setAuthorizationToken]', () => {
    it('should call [setItemStorage] with key and value', () => {
      setAuthorizationToken(MOCK_TOKEN);

      expect(setItemStorage).toHaveBeenCalledWith(MOCK_AUTHORIZATION_KEY, MOCK_TOKEN);
    });
  });
  describe('Test [unsetAuthorizationToken]', () => {
    it('should call [unsetItemStorage] with [AUTHORIZATION_KEY]', () => {
      unsetAuthorizationToken();

      expect(unsetItemStorage).toHaveBeenCalledWith(MOCK_AUTHORIZATION_KEY);
    });
  });
  describe('Test [getAuthorizationToken]', () => {
    it('should should call [getItemStorage] with [AUTHORIZATION_KEY]', () => {
      getAuthorizationToken();

      expect(getItemStorage).toHaveBeenCalledWith(MOCK_AUTHORIZATION_KEY);
    });
  });
  describe('Test [verifyLoggedIn]', () => {
    beforeEach(() => {
      mockGetItemStorage.mockReturnValue(MOCK_TOKEN);
      mockConnectionAPI_GET.mockResolvedValue({ name: 'mock name' });
    });

    it('should call [redirect] with login route when [getAuthorizationToken] return empty', () => {
      mockGetItemStorage.mockReturnValue('');

      verifyLoggedIn();

      expect(redirect).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });
    it('should call [connectionAPI_GET] with URL_USER when [getAuthorizationToken] return a token', () => {
      verifyLoggedIn();

      expect(connectionAPI_GET).toHaveBeenCalledWith(URL_USER);
    });
    it('should return null when [connectionAPI_GET] has been successful', async () => {
      const returnValue = await verifyLoggedIn();

      expect(returnValue).toBeNull();
    });
    it('should call [unsetAuthorizationToken] and [redirect] when request return an error', async () => {
      mockConnectionAPI_GET.mockRejectedValue(new Error('Mock Error'));

      await verifyLoggedIn();

      expect(unsetItemStorage).toHaveBeenCalled();
      expect(redirect).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });
  });
  describe('Test [logout]', () => {
    it('should call [unsetItemStorage] and [navigate] parameter with login route', () => {
      const mockNavigate = jest.fn();
      logout(mockNavigate);

      expect(unsetItemStorage).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });
  });
});
