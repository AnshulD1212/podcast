export const ROLES = 'roles';
export const USERS = 'users';
export const PODCASTS = 'podcasts';

export const getUserKey = (id: number) => `${USERS}:${id}`;
