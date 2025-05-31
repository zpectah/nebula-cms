import { ItemBase, ItemBaseLocales } from '@common';
import { translationsTypeKeys } from '../enums';

export type TranslationsType = keyof typeof translationsTypeKeys;

export interface TranslationsItem extends ItemBase {
  type: TranslationsType;
}

interface TranslationsDetailLocale {
  label: string;
}

export interface TranslationsDetail extends TranslationsItem, ItemBaseLocales<TranslationsDetailLocale> {
  startDate?: string;
  endDate?: string;
}

export type Translations = TranslationsItem[];
