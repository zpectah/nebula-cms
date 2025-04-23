import { articlesTypeKeys } from '@core';

export const ArticlesDetailFormKeys = {
  type: 'type',
  name: 'name',
  locale: 'locale',
  title: 'title',
  description: 'description',
  content: 'content',
  active: 'active',
  deleted: 'deleted',
} as const;

export const ArticlesDetailFormDefaults = {
  type: articlesTypeKeys.default,
  name: '',
  title: '',
  description: '',
  content: '',
  active: true,
  deleted: false,
};

export const ArticlesDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
  title: {
    minLength: 5,
  },
  description: {},
  content: {
    minLength: 5,
  },
};
