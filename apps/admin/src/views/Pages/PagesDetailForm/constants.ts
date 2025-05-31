import { pagesTypeKeys } from '@core';

export const PagesDetailFormKeys = {
  type: 'type',
  name: 'name',
  title: 'title',
  description: 'description',
  content: 'content',
  active: 'active',
  deleted: 'deleted',
} as const;

export const PagesDetailFormDefault = {
  type: pagesTypeKeys.default,
  name: '',
  title: '',
  description: '',
  content: '',
  active: true,
  deleted: false,
};

export const PagesDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};
