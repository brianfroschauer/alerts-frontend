import {environment} from '../../../environments/environment';

const basePath = `${environment.apiUrl}/api/users`;

export const API = {

  get: {
    me: () => `${basePath}/me`,
  },
  post: {

  },
  put: {

  },
  patch: {

  },
  delete: {

  }
};
