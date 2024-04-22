import { OAuthAccessTokenResponse } from '@/types/oauth-access-token-response';

export type PollResponsePending = {
  completed: false;
  data: Record<string, never>;
};

export type PollResponseCompleted = {
  completed: true;
  data: OAuthAccessTokenResponse;
};

export type PollResponse = PollResponsePending | PollResponseCompleted;
