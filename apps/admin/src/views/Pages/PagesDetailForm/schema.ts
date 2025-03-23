import z from 'zod';
import i18next from 'i18next';
import { PagesDetailFormValidations } from './constants';

export const PagesDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
