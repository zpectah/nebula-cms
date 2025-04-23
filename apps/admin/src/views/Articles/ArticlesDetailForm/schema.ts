import z from 'zod';
import i18next from 'i18next';
import { articlesTypeKeys } from '@core';
import { ArticlesDetailFormValidations } from './constants';

const LocaleSchema = z.record(
  z.object({
    title: z
      .string()
      .min(ArticlesDetailFormValidations.title.minLength, { message: i18next.t('form:message.error.minString') }),
    description: z.string().optional(),
    content: z
      .string()
      .min(ArticlesDetailFormValidations.content.minLength, { message: i18next.t('form:message.error.minString') }),
  })
);

export const ArticlesDetailFormSchema = z.object({
  id: z.number(),
  type: z.enum([articlesTypeKeys.default, articlesTypeKeys.event]),
  name: z
    .string()
    .min(ArticlesDetailFormValidations.name.minLength, { message: i18next.t('form:message.error.minString') }),
  locale: LocaleSchema,
  active: z.boolean().optional(),
  deleted: z.boolean().optional(),
  created: z.string().optional(),
  updated: z.string().optional(),
});
