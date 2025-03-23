import z from 'zod';
import i18next from 'i18next';
import { UsersDetailFormValidations } from './constants';

export const UsersDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
