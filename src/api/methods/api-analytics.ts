import { RequestConfig } from '@/types/request-config';
import { ApiBase } from '@/api/methods/api-base';
import { AnalyticsTrackRequest } from '@/types/analytics-track-request';
import { AnalyticsTrackResponse } from '@/types/analytics-track-response';

export class ApiAnalytics extends ApiBase {
  public async track(request: AnalyticsTrackRequest, config?: RequestConfig): Promise<AnalyticsTrackResponse> {
    return (await this.api.client.post('/analytics/track', request, config)) as AnalyticsTrackResponse;
  }
}
