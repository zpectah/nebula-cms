import { ItemBase } from '@common';
import { menuItemsTypeKeys } from '../enums';

export type MenuItemsType = keyof typeof menuItemsTypeKeys;

export interface MenuItemsItem extends ItemBase {
  type: MenuItemsType;
}

export interface MenuItemsDetail extends MenuItemsItem {}

export type MenuItems = MenuItemsItem[];
