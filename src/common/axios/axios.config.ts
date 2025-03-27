import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ResConfig } from '@/types/res.config';

interface IGetReq<D> {
  url: string;
  params?: D;
  headers?: AxiosRequestConfig['headers'];
}

interface IPostReq<D> {
  url: string;
  data: D;
  headers?: AxiosRequestConfig['headers'];
}

interface IPutReq<D> {
  url: string;
  data: D;
  headers?: AxiosRequestConfig['headers'];
}

interface IDeleteReq<D> {
  url: string;
  data?: D;
  headers?: AxiosRequestConfig['headers'];
}

interface IPatchReq<D> {
  url: string;
  data: D;
  headers?: AxiosRequestConfig['headers'];
}

export class AxiosConfig {
  private readonly _axiosInstance: AxiosInstance;

  constructor() {
    this._axiosInstance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_API_PREFIX}`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    this._axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this._axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response?.status === 302) {
        }

        if (error.response?.status === 400) {
          // const { message } = error.response.data;
          //
          // if (message) {
          //   alert(message);
          // }
        }

        if (error.response?.status === 401) {
        }

        if (error.response?.status === 403) {
        }

        return Promise.reject(error);
      },
    );
  }

  protected async get<T, D>({ url, params, headers }: IGetReq<D>) {
    return await this._axiosInstance.get<ResConfig<T>>(url, { params, headers });
  }

  protected async post<T, D>({ url, data, headers }: IPostReq<D>) {
    return await this._axiosInstance.post<ResConfig<T>>(url, data, { headers });
  }

  protected async put<T, D>({ url, data, headers }: IPutReq<D>) {
    return await this._axiosInstance.put<ResConfig<T>>(url, data, { headers });
  }

  protected async delete<T, D>({ url, data, headers }: IDeleteReq<D>) {
    return await this._axiosInstance.delete<ResConfig<T>>(url, { data, headers });
  }

  protected async patch<T, D>({ url, data, headers }: IPatchReq<D>) {
    return await this._axiosInstance.patch<ResConfig<T>>(url, data, { headers });
  }
}
