import z from 'zod';
import i18next from 'i18next';
import { ArticlesDetailFormValidations } from './constants';

export const ArticlesDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
