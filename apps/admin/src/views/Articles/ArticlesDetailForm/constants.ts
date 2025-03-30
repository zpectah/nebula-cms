import { articlesTypeKeys } from '@core';

export const ArticlesDetailFormKeys = {
  type: 'type',
  name: 'name',
  title: 'title',
  description: 'description',
  content: 'content',
} as const;

export const ArticlesDetailFormDefaults = {
  type: articlesTypeKeys.default,
  name: '',
  title: '',
  description: '',
  content: '',
};

export const ArticlesDetailFormValidations = {
  type: {},
  name: {},
  title: {},
  description: {},
  content: {},
};
