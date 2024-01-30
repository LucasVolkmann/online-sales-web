import axios, { AxiosRequestConfig } from 'axios';

import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
  ERROR_INVALID_PASSWORD,
} from '../../constants/errorMessages';
import { MethodsEnum } from '../../enumerations/methods.enum';
import { getAuthorizationToken } from './auth';

export default class ConnectionAPI {
  static async call<T>(url: string, method: MethodsEnum, body?: unknown): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: getAuthorizationToken(),
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url, config)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url, config)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body, config)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body, config)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body, config)).data;
    }
  }

  static async connect<T>(url: string, method: MethodsEnum, body?: unknown): Promise<T> {
    return this.call<T>(url, method, body).catch((err) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);
          case 404:
            throw new Error(ERROR_INVALID_PASSWORD);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionAPI_GET = async <T>(url: string): Promise<T> => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectionAPI_DELETE = async <T>(url: string): Promise<T> => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};

export const connectionAPI_POST = async <T>(url: string, body: unknown): Promise<T> => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};

export const connectionAPI_PUT = async <T>(url: string, body: unknown): Promise<T> => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectionAPI_PATCH = async <T>(url: string, body: unknown): Promise<T> => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};
