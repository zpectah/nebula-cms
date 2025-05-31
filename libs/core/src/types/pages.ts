import { ItemBase, ItemBaseLocales } from '@common';
import { pagesTypeKeys } from '../enums';

export type PagesType = keyof typeof pagesTypeKeys;

export interface PagesItem extends ItemBase {
  type: PagesType;
}

interface PagesDetailLocale {
  title: string;
  description?: string;
  content: string;
}

export interface PagesDetail extends PagesItem, ItemBaseLocales<PagesDetailLocale> {
  startDate?: string;
  endDate?: string;
}

export type Pages = PagesItem[];
