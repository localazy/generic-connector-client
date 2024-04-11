import { GenericConnectorClient } from '~/api/generic-connector-client';

export abstract class ApiBase {
  protected api: GenericConnectorClient;

  constructor(api: GenericConnectorClient) {
    this.api = api;
  }
}
