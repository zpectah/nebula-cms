import { ItemBase, ItemBaseLocales } from '@common';
import { articlesTypeKeys } from '../enums';

export type ArticlesType = keyof typeof articlesTypeKeys;

export interface ArticlesItem extends ItemBase {
  type: ArticlesType;
}

interface ArticlesDetailLocale {
  title: string;
  description?: string;
  content: string;
}

export interface ArticlesDetail extends ArticlesItem, ItemBaseLocales<ArticlesDetailLocale> {
  startDate?: string;
  endDate?: string;
}

export type Articles = ArticlesItem[];
