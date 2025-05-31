import { INewMenuItem } from './types';
import { MenuDetailFormDefault } from './constants';

export const getNewMenuItem = (): INewMenuItem => ({
  id: 0,
  name: MenuDetailFormDefault.name,
  type: MenuDetailFormDefault.type,
  active: MenuDetailFormDefault.active,
  deleted: MenuDetailFormDefault.deleted,
});
