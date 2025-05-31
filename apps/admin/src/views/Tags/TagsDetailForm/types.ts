import { TagsDetail } from '@core';

export interface ITagsDetailForm extends TagsDetail {}

export interface INewTagsItem extends Omit<TagsDetail, 'created' | 'updated'> {}
