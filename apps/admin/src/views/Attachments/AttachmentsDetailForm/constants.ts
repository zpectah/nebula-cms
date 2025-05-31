import { attachmentsTypeKeys } from '@core';

export const AttachmentsDetailFormKeys = {
  type: 'type',
  name: 'name',
  active: 'active',
  deleted: 'deleted',
} as const;

export const AttachmentsDetailFormDefault = {
  type: attachmentsTypeKeys.default,
  name: '',
  active: true,
  deleted: false,
};

export const AttachmentsDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};
