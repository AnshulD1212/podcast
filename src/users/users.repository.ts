import { Users } from '../models/users';
import { AppDataSource } from '../dataSource';
import { UserBody } from './users.types';
import { logger } from '../helpers/logger';

export const usersRepository = AppDataSource.getRepository(Users);

export const createUser = (user: UserBody) => {
  return usersRepository.save(user);
};

export const getUserByEmail = (email: string) => {
  return usersRepository.findOneBy({ email });
};

export const getUserById = (id: number) => {
  return usersRepository.findOneBy({ id });
};

export const getAllUsers = () => {
  return usersRepository.find();
};
