import { AttachmentsDetail } from '@core';

export interface IAttachmentsDetailForm extends AttachmentsDetail {}

export interface INewAttachmentsItem extends Omit<AttachmentsDetail, 'created' | 'updated'> {}
