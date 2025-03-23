import z from 'zod';
import i18next from 'i18next';
import { TranslationsDetailFormValidations } from './constants';

export const TranslationsDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
