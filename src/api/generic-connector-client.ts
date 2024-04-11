import { CreateAxiosDefaults } from 'axios';
import { AxiosHttpAdapter } from '~/http/axios-http-adapter';
import { IHttpAdapter } from '~/http/i-http-adapter';
import { GenericConnectorClientOptions } from '~/types/generic-connector-client-options';
import { ApiPublic } from '~/api/methods/api-public';
import { ApiOAuth } from '~/api/methods/api-oauth';
import { ApiAnalytics } from '~/api/methods/api-analytics';

export class GenericConnectorClient {
  public client: IHttpAdapter;

  public public: ApiPublic;

  public oauth: ApiOAuth;

  public analytics: ApiAnalytics;

  constructor(options: GenericConnectorClientOptions, config?: CreateAxiosDefaults) {
    this.client = new AxiosHttpAdapter(options, config);

    this.public = new ApiPublic(this);
    this.oauth = new ApiOAuth(this);
    this.analytics = new ApiAnalytics(this);
  }
}
