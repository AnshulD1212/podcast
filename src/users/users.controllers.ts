import { Request, Response } from 'express';
import { createUserService, getUsersService } from './users.services';
import { HttpStatusCode } from 'axios';
import { logger } from '../helpers/logger';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, password, role, firstName, lastName, avatar } = req.body;
    const user = await createUserService({
      email,
      password,
      role,
      firstName,
      lastName,
      avatar
    });
    res.status(HttpStatusCode.Created).send(user);
  } catch (error) {
    logger.error(`Error during user creation: ${error}`);
    res.sendStatus(HttpStatusCode.InternalServerError);
  }
};

export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(HttpStatusCode.Ok).send(users);
  } catch (error) {
    logger.error(`Error during getting users: ${error}`);
    res.sendStatus(HttpStatusCode.InternalServerError);
  }
};
