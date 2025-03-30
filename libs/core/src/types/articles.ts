import { ItemBase } from '@common';

export interface ArticlesItem extends ItemBase {
  locale: {
    [k: string]: {
      title: string;
      description?: string;
      content: string;
    };
  };
}

export type Articles = ArticlesItem[];
