import { INewMembersItem } from './types';
import { MembersDetailFormDefault } from './constants';

export const getNewMembersItem = (): INewMembersItem => ({
  id: 0,
  name: MembersDetailFormDefault.name,
  type: MembersDetailFormDefault.type,
  active: MembersDetailFormDefault.active,
  deleted: MembersDetailFormDefault.deleted,
});
