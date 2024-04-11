import { OAuthPollRequest } from '~/types/oauth-poll-request';

export type OAuthContinuousPollRequest = OAuthPollRequest & {
  pollingMaxAttempts?: number;
  pollingIntervalMs?: number;
};
