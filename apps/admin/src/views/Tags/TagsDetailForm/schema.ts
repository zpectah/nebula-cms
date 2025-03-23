import z from 'zod';
import i18next from 'i18next';
import { TagsDetailFormValidations } from './constants';

export const TagsDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
