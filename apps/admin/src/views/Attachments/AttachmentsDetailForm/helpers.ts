import { INewAttachmentsItem } from './types';
import { AttachmentsDetailFormDefault } from './constants';

export const getNewAttachmentsItem = (): INewAttachmentsItem => ({
  id: 0,
  name: AttachmentsDetailFormDefault.name,
  type: AttachmentsDetailFormDefault.type,
  active: AttachmentsDetailFormDefault.active,
  deleted: AttachmentsDetailFormDefault.deleted,
});
