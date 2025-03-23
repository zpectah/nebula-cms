import z from 'zod';
import i18next from 'i18next';
import { MessagesDetailFormValidations } from './constants';

export const MessagesDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
