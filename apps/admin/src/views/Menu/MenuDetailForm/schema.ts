import z from 'zod';
import i18next from 'i18next';
import { MenuDetailFormValidations } from './constants';

export const MenuDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
