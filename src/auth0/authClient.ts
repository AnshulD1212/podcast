import { ManagementClient } from 'auth0';

export const authClient = (scope: string) => {
  if (
    !process.env.AUTH_DOMAIN ||
    !process.env.CLIENT_ID ||
    !process.env.CLIENT_SECRET
  ) {
    throw new Error('Auth0 environment variables are not set!');
  }
  return new ManagementClient({
    domain: process.env.AUTH_DOMAIN,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope
  });
};
