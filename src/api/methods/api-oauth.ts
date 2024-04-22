import { RequestConfig } from '@/types/request-config';
import { OAuthPollRequest } from '@/types/oauth-poll-request';
import { ApiBase } from './api-base';
import { PollResponse, PollResponseCompleted } from '@/main';
import { OAuthContinuousPollRequest } from '@/types/oauth-continuous-poll-request';

export class ApiOAuth extends ApiBase {
  public async poll(request: OAuthPollRequest, config?: RequestConfig): Promise<PollResponse> {
    return (await this.api.client.get('/oauth/poll', {
      ...config,
      params: {
        ...config?.params,
        ...request,
      },
    })) as PollResponse;
  }

  /**
   * Polls the OAuth server continuously until the sign in process is completed
   * Polls for 3 minutes by default
   * @throws Error if polling times out
   */
  public async continuousPoll(
    request: OAuthContinuousPollRequest,
    config?: RequestConfig,
  ): Promise<PollResponseCompleted> {
    const POLLING_LIMIT = request.pollingMaxAttempts || 60;
    const INTERVAL_PERIOD = request.pollingIntervalMs || 2000;

    let counter = 1;

    let result = await this.poll({ readKey: request.readKey }, config);
    if (!result.completed) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        const pollInterval = setInterval(async (): Promise<any> => {
          result = await this.poll({ readKey: request.readKey }, config);

          if (result.completed) {
            clearInterval(pollInterval);
            resolve(result);
          }

          counter += 1;
          if (counter >= POLLING_LIMIT) {
            clearInterval(pollInterval);
            reject(new Error('Sign in attempts timed out.'));
          }
        }, INTERVAL_PERIOD);
      });
    }
    return result;
  }
}
