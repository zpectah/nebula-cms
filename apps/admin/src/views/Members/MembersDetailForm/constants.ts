import { membersTypeKeys } from '@core';

export const MembersDetailFormKeys = {
  type: 'type',
  name: 'name',
  active: 'active',
  deleted: 'deleted',
} as const;

export const MembersDetailFormDefault = {
  type: membersTypeKeys.default,
  name: '',
  active: true,
  deleted: false,
};

export const MembersDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};
