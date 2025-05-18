import z from 'zod';
import i18next from 'i18next';
import dayjs from 'dayjs';
import { articlesTypeKeys, articlesTypeKeysArray } from '@core';
import { ArticlesDetailFormKeys, ArticlesDetailFormValidations } from './constants';

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

export const ArticlesDetailFormSchema = z
  .object({
    id: z.number(),
    type: z.enum(articlesTypeKeysArray),
    name: z
      .string()
      .min(ArticlesDetailFormValidations.name.minLength, { message: i18next.t('form:message.error.minString') }),
    locale: LocaleSchema,
    active: z.boolean().optional(),
    deleted: z.boolean().optional(),
    created: z.string().optional(),
    updated: z.string().optional(),
    startDate: z.custom<dayjs.Dayjs>().optional(),
    endDate: z.custom<dayjs.Dayjs>().optional(),
  })
  .superRefine((model, context) => {
    const isEvent = model.type === articlesTypeKeys.event;

    if (isEvent) {
      if (!model.startDate) {
        context.addIssue({
          code: 'custom',
          path: [ArticlesDetailFormKeys.startDate],
          message: i18next.t('form:message.error.required'),
        });
      }

      if (!model.endDate) {
        context.addIssue({
          code: 'custom',
          path: [ArticlesDetailFormKeys.endDate],
          message: i18next.t('form:message.error.required'),
        });
      }

      if (dayjs.isDayjs(model.startDate) && dayjs.isDayjs(model.endDate) && model.endDate.isBefore(model.startDate)) {
        context.addIssue({
          code: 'custom',
          path: [ArticlesDetailFormKeys.endDate],
          message: i18next.t('form:message.error.endDateBeforeStartDate'),
        });
      }
    }
  });
