import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { auth } from 'express-openid-connect';
import { healthController } from './health/health.controller';
import { usersRoutes } from './users/users.routes';

export const expressAPI = (): express.Application => {
  const api = express();
  const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET
  };

  api.use(auth(config));
  api.use(express.json());
  api.use(express.urlencoded({ extended: true }));
  // health check API
  api.get('/health', healthController);

  // users API
  api.use('/users', usersRoutes);

  return api;
};
