import { CreateAxiosDefaults } from 'axios';
import { Services } from '@/enums/service';

export type GenericConnectorClientOptions = {
  pluginId: Services;

  genericConnectorUrl?: string;

  axios?: CreateAxiosDefaults;
};
