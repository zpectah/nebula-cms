import { INewUsersItem } from './types';
import { UsersDetailFormDefault } from './constants';

export const getNewUsersItem = (): INewUsersItem => ({
  id: 0,
  name: UsersDetailFormDefault.name,
  type: UsersDetailFormDefault.type,
  active: UsersDetailFormDefault.active,
  deleted: UsersDetailFormDefault.deleted,
});
