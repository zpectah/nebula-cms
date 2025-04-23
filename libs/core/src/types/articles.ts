import { ItemBase } from '@common';
import { articlesTypeKeys } from '../enums';

export type ArticlesType = keyof typeof articlesTypeKeys;

export interface ArticlesItem extends ItemBase {
  type: ArticlesType;
}

export interface ArticlesDetail extends ArticlesItem {
  locale: {
    [k: string]: {
      title: string;
      description?: string;
      content: string;
    };
  };
}

export type Articles = ArticlesItem[];
