import {environment} from '../../../environments/environment';

const basePath = `${environment.apiUrl}/api/login`;

export const API = {

  post: {
    login: () => `${basePath}`,
  }
};
