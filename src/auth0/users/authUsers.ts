import { logger } from '../../helpers/logger';
import { authClient } from '../authClient';
import { assignRolesToUser } from '../roles/roles';
import { Role } from '../types';

export const createUser = async (
  email: string,
  password: string,
  role: Role
) => {
  try {
    const auth0 = authClient('create:users');
    const user = await auth0.createUser({
      email,
      password,
      connection: 'Username-Password-Authentication'
    });
    if (user.user_id) {
      assignRolesToUser(user.user_id, role);
    }
    return {
      ...user,
      role
    };
  } catch (error) {
    logger.error(`Error during user creation: ${error}`);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const auth0 = authClient('read:users');
    const users = await auth0.getUsers();
    return users;
  } catch (error) {
    logger.error(`Error during getting users: ${error}`);
    throw error;
  }
};
