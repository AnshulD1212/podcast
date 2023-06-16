import { redisClient } from '../../../redis/client';
import { logger } from '../../helpers/logger';
import { authClient } from '../authClient';
import { ROLES } from '../../../redis/keys';
import { Role as authRole } from 'auth0';
import { Role } from '../types';

export const getRoles = async () => {
  try {
    const roles = await redisClient.get(ROLES);
    if (roles) {
      logger.info(`Roles found in Redis cache`);
      return JSON.parse(roles);
    } else {
      logger.info(`Roles not found in Redis cache, retrieving from Auth0`);
      const auth0 = authClient('read:roles');
      const roles = await auth0.getRoles();
      await redisClient.set(ROLES, JSON.stringify(roles));
      logger.info(`Roles stored in Redis cache`);
      return roles;
    }
  } catch (error) {
    logger.error(`Error during getting roles: ${error}`);
    throw error;
  }
};

export const assignRolesToUser = async (userId: string, roleName: Role) => {
  try {
    const auth0 = authClient('update:users');
    const roles = await getRoles();
    const role = roles.find((role: authRole) => role.name === roleName);
    await auth0.assignRolestoUser({ id: userId }, { roles: [role.id] });
  } catch (error) {
    logger.error(`Error during assigning roles to user: ${error}`);
  }
};
