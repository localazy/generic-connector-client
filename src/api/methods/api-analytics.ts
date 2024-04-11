import { AxiosRequestConfig } from 'axios';
import { ApiBase } from '~/api/methods/api-base';
import { AnalyticsTrackRequest } from '~/types/analytics-track-request';
import { AnalyticsTrackResponse } from '~/types/analytics-track-response';

export class ApiAnalytics extends ApiBase {
  public async track(
    request: AnalyticsTrackRequest,
    config?: AxiosRequestConfig,
  ): Promise<AnalyticsTrackResponse> {
    return this.api.client.post('/analytics/track', request, config);
  }
}
