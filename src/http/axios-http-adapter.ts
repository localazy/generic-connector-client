import axios, {
  CreateAxiosDefaults, AxiosInstance, AxiosResponse, AxiosRequestConfig,
} from 'axios';
import { Services } from '@/enums/service';
import { IHttpAdapter } from '@/http/i-http-adapter';
import { GenericConnectorClientOptions } from '@/types/generic-connector-client-options';

export class AxiosHttpAdapter implements IHttpAdapter {
  public client: IHttpAdapter;

  constructor(options: GenericConnectorClientOptions, config?: CreateAxiosDefaults) {
    this.client = AxiosHttpAdapter.clientFactory(
      options.genericConnectorUrl || 'https://plugins.localazy.com/generic-connector',
      options.pluginId,
      config,
    );
  }

  protected static clientFactory(baseURL: string, pluginId: Services, config?: CreateAxiosDefaults): AxiosInstance {
    const client: AxiosInstance = axios.create({
      ...config,
      baseURL,
      headers: {
        common: {
          'X-Localazy-Plugin-Id': pluginId,
        },
      },
    });

    client.interceptors.response.use(
      (response: AxiosResponse<any, any>) => response.data,
      (err: any): Promise<never> => Promise.reject(err),
    );

    return client;
  }

  post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.client.post(url, data, config);
  }

  put<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.client.put(url, data, config);
  }

  get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.client.get(url, config);
  }

  delete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.client.delete(url, config);
  }
}
