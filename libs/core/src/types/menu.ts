import { ItemBase } from '@common';
import { menuTypeKeys } from '../enums';

export type MenuType = keyof typeof menuTypeKeys;

export interface MenuItem extends ItemBase {
  type: MenuType;
}

export interface MenuDetail extends MenuItem {}

export type Menu = MenuItem[];
