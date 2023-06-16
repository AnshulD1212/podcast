import { Users } from '../models/users';

export type UserBody = Pick<
  Users,
  'email' | 'password' | 'role' | 'firstName' | 'lastName' | 'avatar'
>;

export type UserAuthBody = {
  email: string;
  password: string;
  role: 'listener' | 'creator';
  firstName: string;
  lastName: string;
  avatar: string;
  authId: string;
};
