import { ItemBase } from '@common';
import { membersTypeKeys } from '../enums';

export type MembersType = keyof typeof membersTypeKeys;

export interface MembersItem extends ItemBase {
  type: MembersType;
}

export interface MembersDetail extends MembersItem {}

export type Members = MembersItem[];
