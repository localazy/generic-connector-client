import { RequestConfig } from '@/types/request-config';
import { ApiBase } from '@/api/methods/api-base';
import { GeneratedKeys } from '@/types/generated-keys';

export class ApiPublic extends ApiBase {
  /**
   * Get generated {@link GeneratedKeys keys} for OAuth polling process
   *
   * @param config Request config
   */
  public async keys(config?: RequestConfig): Promise<GeneratedKeys> {
    return (await this.api.client.get('/public/keys', { ...config })) as GeneratedKeys;
  }
}
