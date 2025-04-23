import { INewArticlesItem } from './types';
import { ArticlesDetailFormDefaults } from './constants';

export const getNewArticlesItem = (locales: string[]): INewArticlesItem => ({
  id: 0,
  name: ArticlesDetailFormDefaults.name,
  type: ArticlesDetailFormDefaults.type,
  locale: locales.reduce((loc: Record<string, any>, lang: string) => {
    loc[lang] = {
      title: ArticlesDetailFormDefaults.title,
      description: ArticlesDetailFormDefaults.description,
      content: ArticlesDetailFormDefaults.content,
    };

    return loc;
  }, {}),
  active: ArticlesDetailFormDefaults.active,
  deleted: ArticlesDetailFormDefaults.deleted,
});
