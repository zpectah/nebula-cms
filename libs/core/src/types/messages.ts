import { ItemBase } from '@common';
import { messagesTypeKeys } from '../enums';

export type MessagesType = keyof typeof messagesTypeKeys;

export interface MessagesItem extends ItemBase {
  type: MessagesType;
}

export interface MessagesDetail extends MessagesItem {}

export type Messages = MessagesItem[];
