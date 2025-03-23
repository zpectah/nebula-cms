import z from 'zod';
import i18next from 'i18next';
import { LoginFormValidations } from './constants';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(LoginFormValidations.email.minLength, { message: i18next.t('form:message.error.minString') })
    .email(i18next.t('form:message.error.email_format')),
  password: z
    .string()
    .min(LoginFormValidations.email.minLength, { message: i18next.t('form:message.error.minString') }),
});
