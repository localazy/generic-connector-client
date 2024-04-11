import { OAuthAuthorizationUrlRequest } from '~/types/oauth-authorization-url-request';

export function getOAuthAuthorizationUrl(
  query: OAuthAuthorizationUrlRequest,
  baseUrl?: string,
) {
  const params = new URLSearchParams();
  params.append('client_id', query.clientId);
  if (query.redirectUri) {
    params.append('redirect_uri', query.redirectUri);
  }
  if (query.customId) {
    params.append('custom_id', query.customId);
  }
  if (query.state) {
    params.append('state', query.state);
  }
  if (query.scope) {
    params.append('scope', query.scope);
  }
  if (query.allowCreate) {
    params.append('allow_create', query.allowCreate.toString());
  }
  if (query.createType) {
    params.append('create_type', query.createType);
  }
  if (query.createLocale) {
    params.append('create_locale', query.createLocale);
  }
  if (query.minimalRole) {
    params.append('minimal_role', query.minimalRole);
  }
  return `${baseUrl || 'https://localazy.com'}/oauth/authorize?${params.toString()}`;
}
