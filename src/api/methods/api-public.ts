import { AxiosRequestConfig } from 'axios';
import { ApiBase } from '~/api/methods/api-base';
import { GeneratedKeys } from '~/types/generated-keys';

export class ApiPublic extends ApiBase {
  /**
   * Get generated {@link GeneratedKeys keys} for OAuth polling process
   *
   * @param config Axios request config
   */
  public async keys(config?: AxiosRequestConfig): Promise<GeneratedKeys> {
    return this.api.client.get('/public/keys', { ...config });
  }
}
