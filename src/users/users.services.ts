import { getUsers } from '../auth0/users/authUsers';
import { logger } from '../helpers/logger';
import { getAllUsers } from './users.repository';
import { UserBody } from './users.types';

export const createUserService = async (user: UserBody) => {};
export const getUsersService = async () => {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    logger.error(`Error during getting users: ${error}`);
  }
};
