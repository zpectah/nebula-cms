import { ItemBase } from '@common';
import { tagsTypeKeys } from '../enums';

export type TagsType = keyof typeof tagsTypeKeys;

export interface TagsItem extends ItemBase {
  type: TagsType;
}

export interface TagsDetail extends TagsItem {}

export type Tags = TagsItem[];
