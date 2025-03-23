import z from 'zod';
import i18next from 'i18next';
import { MembersDetailFormValidations } from './constants';

export const MembersDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
