import z from 'zod';
import i18next from 'i18next';
import { ArticlesDetailFormValidations } from './constants';
import { articlesTypeKeys } from '@core';

const LocaleSchema = z.record(
  z.object({
    title: z.string(),
    description: z.string().optional(),
    content: z.string(),
  })
);

export const ArticlesDetailFormSchema = z.object({
  id: z.number(),
  type: z.enum([articlesTypeKeys.default, articlesTypeKeys.event]),
  name: z.string(),
  locale: LocaleSchema,
  active: z.boolean(),
  deleted: z.boolean(),
  created: z.string(),
  updated: z.string(),
});
