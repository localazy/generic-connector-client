export type AnalyticsTrackRequest = {
  event: string;
  category?: string;
  data: {
    userId: string;
    orgId: string;
    [key: string]: any;
  };
};
