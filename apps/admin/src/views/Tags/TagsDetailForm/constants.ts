import { tagsTypeKeys } from '@core';

export const TagsDetailFormKeys = {
  type: 'type',
  name: 'name',
  active: 'active',
  deleted: 'deleted',
} as const;

export const TagsDetailFormDefault = {
  type: tagsTypeKeys.default,
  name: '',
  active: true,
  deleted: false,
};

export const TagsDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};
