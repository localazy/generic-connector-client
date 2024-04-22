import { Locales } from '@localazy/languages';
import { Scope } from '@/types/scope';
import { ProjectType } from '@/types/project-type';
import { MinimalRole } from '@/types/minimal-role';

export type OAuthAuthorizationUrlRequest = {
  /**
   * Identifier of the oauth application.
   */
  clientId: string;

  /**
   * Default: as defined by app
   * Redirect URI must have the same host, protocol and path prefix as redirect URI defined in the app.
   */
  redirectUri?: string;

  /**
   * Optional custom identifier; will be passed to the redirect URI after authorization.
   */
  customId?: string;

  /**
   * Optional state, will be passed to the redirect URI after authorization.
   */
  state?: string;

  /**
   * Default: as defined by app
   * Allow to overwrite the scope defined by the app.
   */
  scope?: Scope;

  /**
   * Default: false
   * If set to true, it allows for creating a new app in authorization dialog.
   */
  allowCreate?: boolean;

  /**
   * Default: `private`
   * The type of the project to be create if `allowCreate` is enabled
   */
  createType?: ProjectType;

  /**
   * Default: `en`
   * The source locale of the project to be create if `allowCreate` is enabled.
   */
  createLocale?: Locales;

  /**
   * Default: `none`
   * The minimal user role for the project.
   */
  minimalRole?: MinimalRole;
};
