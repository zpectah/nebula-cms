import z from 'zod';
import i18next from 'i18next';
import { CategoriesDetailFormValidations } from './constants';

export const CategoriesDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
