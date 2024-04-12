# 📦 Localazy Generic Connector Client

> Node.js module that allows to interact with the Localazy Generic Connector.

## 🔧 Install

```bash
npm install @localazy/generic-connector-client
# or you can use yarn or pnpm
```

## 🚀 Usage

###### ESM

```javascript
import { GenericConnectorClient, getOAuthAuthorizationUrl } from '@localazy/generic-connector-client';

const api = new GenericConnectorClient({ pluginId: 99 });             // Create Api client with your `pluginId`

const keys = await GenericConnectorClient.public.keys();              // Get read and write keys for OAuth.
const url = getOAuthAuthorizationUrl({
  clientId: 'your-client-id',
  customId: 'your-write-key',
});                                                                   // Get OAuth authorization URL.
window.open(url);
const pollResult = await GenericConnectorClient.oauth.continuousPoll({
  readKey: keys.readKey,
});                                                                   // Poll for the result.

console.log(pollResult);                                              // Print the result with access token.
```

###### TypeScript

```javascript
import { GenericConnectorClient, getOAuthAuthorizationUrl, GeneratedKeys, PollResponseCompleted } from '@localazy/generic-connector-client';

const api: GenericConnectorClient = new GenericConnectorClient({ pluginId: 99 });             // Create Api client with your `pluginId`

const keys: GeneratedKeys = await GenericConnectorClient.public.keys();              // Get read and write keys for OAuth.
const url: string = getOAuthAuthorizationUrl({
  clientId: 'your-client-id',
  customId: 'your-write-key',
});                                                                   // Get OAuth authorization URL.
window.open(url);
const pollResult: PollResponseCompleted = await GenericConnectorClient.oauth.continuousPoll({
  readKey: keys.readKey,
});                                                                   // Poll for the result.

console.log(pollResult);                                              // Print the result with access token.
```
