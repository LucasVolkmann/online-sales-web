import axios from 'axios';

import { ERROR_ACCESS_DENIED, ERROR_CONNECTION } from '../../constants/errorMessages';
import { MethodsEnum } from '../../enumerations/methods.enum';

export default class ConnectionAPI {
  static async call<T>(url: string, method: MethodsEnum, body?: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return await axios.get<T>(url);
      case MethodsEnum.DELETE:
        return await axios.delete<T>(url);
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: MethodsEnum, body?: unknown) {
    return this.call<T>(url, method, body).catch((err) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionAPI_GET = async <T>(url: string) => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectionAPI_DELETE = async <T>(url: string) => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};

export const connectionAPI_POST = async <T>(url: string, body: unknown) => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};

export const connectionAPI_PUT = async <T>(url: string, body: unknown) => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectionAPI_PATCH = async <T>(url: string, body: unknown) => {
  return await ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};
