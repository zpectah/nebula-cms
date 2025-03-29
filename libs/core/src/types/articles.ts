import { ItemBase } from '@common';

export interface ArticlesItem extends ItemBase {
  // TODO #mock
  userId: number;
  title: string;
  body: string;
}

export type Articles = ArticlesItem[];
