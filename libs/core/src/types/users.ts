import { ItemBase } from '@common';
import { usersTypeKeys } from '../enums';

export type UsersType = keyof typeof usersTypeKeys;

export interface UsersItem extends ItemBase {
  type: UsersType;
}

export interface UsersDetail extends UsersItem {}

export type Users = UsersItem[];
