import { INewTranslationsItem } from './types';
import { TranslationsDetailFormDefault } from './constants';

export const getNewTranslationsItem = (locales: string[]): INewTranslationsItem => ({
  id: 0,
  name: TranslationsDetailFormDefault.name,
  type: TranslationsDetailFormDefault.type,
  locale: locales.reduce((loc: Record<string, any>, lang: string) => {
    loc[lang] = {
      title: TranslationsDetailFormDefault.label,
    };

    return loc;
  }, {}),
  active: TranslationsDetailFormDefault.active,
  deleted: TranslationsDetailFormDefault.deleted,
});
