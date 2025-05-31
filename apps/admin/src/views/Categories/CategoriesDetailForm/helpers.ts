import { INewCategoriesItem } from './types';
import { CategoriesDetailFormDefault } from './constants';

export const getNewCategoriesItem = (locales: string[]): INewCategoriesItem => ({
  id: 0,
  name: CategoriesDetailFormDefault.name,
  type: CategoriesDetailFormDefault.type,
  locale: locales.reduce((loc: Record<string, any>, lang: string) => {
    loc[lang] = {
      title: CategoriesDetailFormDefault.title,
      description: CategoriesDetailFormDefault.description,
    };

    return loc;
  }, {}),
  active: CategoriesDetailFormDefault.active,
  deleted: CategoriesDetailFormDefault.deleted,
});
