import { INewTagsItem } from './types';
import { TagsDetailFormDefault } from './constants';

export const getNewTagsItem = (): INewTagsItem => ({
  id: 0,
  name: TagsDetailFormDefault.name,
  type: TagsDetailFormDefault.type,
  active: TagsDetailFormDefault.active,
  deleted: TagsDetailFormDefault.deleted,
});
