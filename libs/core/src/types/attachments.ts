import { ItemBase } from '@common';
import { attachmentsTypeKeys } from '../enums';

export type AttachmentsType = keyof typeof attachmentsTypeKeys;

export interface AttachmentsItem extends ItemBase {
  type: AttachmentsType;
}

export interface AttachmentsDetail extends AttachmentsItem {}

export type Attachments = AttachmentsItem[];
