import { INewPagesItem } from './types';
import { PagesDetailFormDefault } from './constants';

export const getNewPagesItem = (locales: string[]): INewPagesItem => ({
  id: 0,
  name: PagesDetailFormDefault.name,
  type: PagesDetailFormDefault.type,
  locale: locales.reduce((loc: Record<string, any>, lang: string) => {
    loc[lang] = {
      title: PagesDetailFormDefault.title,
      description: PagesDetailFormDefault.description,
      content: PagesDetailFormDefault.content,
    };

    return loc;
  }, {}),
  active: PagesDetailFormDefault.active,
  deleted: PagesDetailFormDefault.deleted,
});
