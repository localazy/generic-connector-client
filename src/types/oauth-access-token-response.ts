import { AccessToken } from '~/types/access-token';
import { Scope } from '~/types/scope';
import { User } from '~/types/user';
import { Project } from '~/types/project';
import { Org } from '~/types/org';

export type OAuthAccessTokenResponse = {
  accessToken: AccessToken;
  scope: Scope;
  user?: User;
  project?: Project;
  org?: Org;
};
