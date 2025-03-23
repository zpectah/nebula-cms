import z from 'zod';
import i18next from 'i18next';
import { AttachmentsDetailFormValidations } from './constants';

export const AttachmentsDetailFormSchema = z.object({
  type: z.string(),
  name: z.string(),
});
