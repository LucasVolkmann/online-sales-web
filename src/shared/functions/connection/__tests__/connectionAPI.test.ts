import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
  ERROR_INVALID_PASSWORD,
} from '../../../constants/errorMessages';
import { MethodsEnum } from '../../../enumerations/methods.enum';
import ConnectionAPI, {
  connectionAPI_DELETE,
  connectionAPI_GET,
  connectionAPI_PATCH,
  connectionAPI_POST,
  connectionAPI_PUT,
} from '../connectionAPI';

const MOCK_URL = 'http://mock';
const MOCK_TOKEN = 'MOCK_TOKEN';
const MOCK_BODY = { mockBody: 'mockBody' };
const mockGetAuthorizationToken = jest.fn(() => MOCK_TOKEN);
jest.mock('../auth', () => ({
  getAuthorizationToken: () => mockGetAuthorizationToken(),
}));

const mockAxios = new MockAdapter(axios);

describe('Test [connectionAPI]', () => {
  describe('Outside class tests', () => {
    beforeAll(() => {
      mockAxios.onAny(MOCK_URL).reply(200);
    });
    afterAll(() => {
      jest.restoreAllMocks();
      mockAxios.reset();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('call [connectionAPI_GET] should return connect call with URL and get method', async () => {
      const spyConnect = jest.spyOn(ConnectionAPI, 'connect');
      await connectionAPI_GET(MOCK_URL);

      expect(spyConnect).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.GET);
    });
    it('call [connectionAPI_DELETE] should return connect call with URL and delete method', async () => {
      const spyConnect = jest.spyOn(ConnectionAPI, 'connect');
      await connectionAPI_DELETE(MOCK_URL);

      expect(spyConnect).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.DELETE);
    });
    it('call [connectionAPI_POST] should return connect call with URL, post method and body', async () => {
      const spyConnect = jest.spyOn(ConnectionAPI, 'connect');
      await connectionAPI_POST(MOCK_URL, MOCK_BODY);

      expect(spyConnect).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.POST, MOCK_BODY);
    });
    it('call [connectionAPI_PUT] should return connect call with URL, put method and body', async () => {
      const spyConnect = jest.spyOn(ConnectionAPI, 'connect');
      await connectionAPI_PUT(MOCK_URL, MOCK_BODY);

      expect(spyConnect).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.PUT, MOCK_BODY);
    });
    it('call [connectionAPI_PATCH] should return connect call with URL, patch method and body', async () => {
      const spyConnect = jest.spyOn(ConnectionAPI, 'connect');
      await connectionAPI_PATCH(MOCK_URL, MOCK_BODY);

      expect(spyConnect).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.PATCH, MOCK_BODY);
    });
  });
  describe('Test [ConnectionAPI] class', () => {
    describe('Test [call]', () => {
      afterEach(() => {
        jest.clearAllMocks();
        mockAxios.reset();
      });
      it('should send body when POST', async () => {
        mockAxios.onPost(MOCK_URL).reply(200);
        const spyAxiosPost = jest.spyOn(axios, 'post');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.POST, MOCK_BODY);

        expect(spyAxiosPost.mock.calls[0][1]).toEqual(MOCK_BODY);
      });
      it('should send body when PUT', async () => {
        mockAxios.onPut(MOCK_URL).reply(200);
        const spyAxiosPut = jest.spyOn(axios, 'put');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.PUT, MOCK_BODY);

        expect(spyAxiosPut.mock.calls[0][1]).toEqual(MOCK_BODY);
      });
      it('should send body when PATCH', async () => {
        mockAxios.onPatch(MOCK_URL).reply(200);
        const spyAxiosPatch = jest.spyOn(axios, 'patch');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.PATCH, MOCK_BODY);

        expect(spyAxiosPatch.mock.calls[0][1]).toEqual(MOCK_BODY);
      });
      it('should not send body when GET', async () => {
        mockAxios.onGet(MOCK_URL).reply(200);
        const spyAxiosGet = jest.spyOn(axios, 'get');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.GET, MOCK_BODY);

        expect(spyAxiosGet.mock.calls[0]).not.toContain(MOCK_BODY);
      });
      it('should not send body when DELETE', async () => {
        mockAxios.onDelete(MOCK_URL).reply(200);
        const spyAxiosDelete = jest.spyOn(axios, 'delete');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.DELETE, MOCK_BODY);

        expect(spyAxiosDelete.mock.calls[0]).not.toContain(MOCK_BODY);
      });
      it('should send headers in request', async () => {
        mockAxios.onPost(MOCK_URL).reply(200);
        const spyAxiosDelete = jest.spyOn(axios, 'post');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.POST, MOCK_BODY);

        expect(spyAxiosDelete.mock.calls[0][2]).toHaveProperty('headers');
      });
      it('should send authorization in header request', async () => {
        mockAxios.onPost(MOCK_URL).reply(200);
        const spyAxiosDelete = jest.spyOn(axios, 'post');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.POST, MOCK_BODY);

        expect(spyAxiosDelete.mock.calls[0][2]).toHaveProperty('headers.Authorization');
      });
      it('should set authorization by calling [getAuthorizationToken]', async () => {
        mockAxios.onGet(MOCK_URL).reply(200);
        const spyAxiosGet = jest.spyOn(axios, 'get');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.GET);

        expect(mockGetAuthorizationToken).toHaveBeenCalled();
        expect(spyAxiosGet.mock.calls[0][1]).toHaveProperty('headers.Authorization', MOCK_TOKEN);
      });
      it('should send content-type in header request', async () => {
        mockAxios.onPost(MOCK_URL).reply(200);
        const spyAxiosDelete = jest.spyOn(axios, 'post');
        await ConnectionAPI.call(MOCK_URL, MethodsEnum.POST, MOCK_BODY);

        expect(spyAxiosDelete.mock.calls[0][2]).toHaveProperty('headers.Content-Type');
      });
    });
    describe('Test [connect]', () => {
      afterEach(() => {
        jest.clearAllMocks();
        mockAxios.reset();
      });

      it('should call [this.call] and send url and method when GET', async () => {
        mockAxios.onGet(MOCK_URL).reply(200);
        const spyCall = jest.spyOn(ConnectionAPI, 'call');

        await ConnectionAPI.connect(MOCK_URL, MethodsEnum.GET);

        expect(spyCall).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.GET, undefined);
      });
      it('should call [this.call] and send url, method and body when POST', async () => {
        mockAxios.onPost(MOCK_URL).reply(200);
        const spyCall = jest.spyOn(ConnectionAPI, 'call');

        await ConnectionAPI.connect(MOCK_URL, MethodsEnum.POST, MOCK_BODY);

        expect(spyCall).toHaveBeenCalledWith(MOCK_URL, MethodsEnum.POST, MOCK_BODY);
      });
      it('should throw connection error when receive inexistent status', async () => {
        mockAxios.onGet(MOCK_URL).reply(999);

        await expect(ConnectionAPI.connect(MOCK_URL, MethodsEnum.GET)).rejects.toThrow(
          new Error(ERROR_CONNECTION),
        );
      });
      it('should throw access denied when receive 401 status', async () => {
        mockAxios.onGet(MOCK_URL).replyOnce(401);

        await expect(ConnectionAPI.connect(MOCK_URL, MethodsEnum.GET)).rejects.toThrow(
          new Error(ERROR_ACCESS_DENIED),
        );
      });
      it('should throw access denied when receive 403 status', async () => {
        mockAxios.onGet(MOCK_URL).replyOnce(403);

        await expect(ConnectionAPI.connect(MOCK_URL, MethodsEnum.GET)).rejects.toThrow(
          new Error(ERROR_ACCESS_DENIED),
        );
      });
      it('should throw invalid password error when receive 404 status', async () => {
        mockAxios.onGet(MOCK_URL).reply(404);

        await expect(ConnectionAPI.connect(MOCK_URL, MethodsEnum.GET)).rejects.toThrow(
          new Error(ERROR_INVALID_PASSWORD),
        );
      });
    });
  });
});
