import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useWatch } from 'react-hook-form';
import { Stack, Divider } from '@mui/material';
import { articlesTypeKeys } from '@core';
import config from '../../../config';
import {
  DetailDrawerForm,
  Input,
  Select,
  FormField,
  ControlledSwitch,
  ControlledWysiwygEditor,
  ControlledDatePicker,
  LocalesContainerField,
} from '../../../components';
import { useSelectItems } from '../../../hooks';
import { getTypedDate } from '../../../utils';
import { IArticlesDetailForm } from './types';
import { ArticlesDetailFormKeys, ArticlesDetailFormDefaults, ArticlesDetailFormValidations } from './constants';
import { useArticlesDetailForm } from './useArticlesDetailForm';

const ArticlesDetailForm = () => {
  const { id } = useParams();
  const { t } = useTranslation('form');
  const { form, isLoading, locale, locales, onLocaleChange, onSubmit, onDelete, title } = useArticlesDetailForm(id);

  const typeOptionsItems = useSelectItems(Object.keys(articlesTypeKeys));
  const type = useWatch({ name: ArticlesDetailFormKeys.type, control: form.control });
  const startDate = useWatch({ name: ArticlesDetailFormKeys.startDate, control: form.control });
  const isTypeEvent = useMemo(() => type === articlesTypeKeys.event, [type]);

  return (
    <DetailDrawerForm<IArticlesDetailForm>
      root={config.routes.articles.path}
      id={id}
      formProps={{
        form,
        formProps: { onSubmit },
      }}
      title={title}
      isLoading={isLoading}
      isDebug
      onDelete={onDelete}
      sidebar={
        <>
          Náhled: ...
          <br />
          <br />
          Přílohy: ...
          <br />
          <br />
        </>
      }
    >
      <FormField
        name={ArticlesDetailFormKeys.name}
        label={t('label.name')}
        field={
          <Input
            defaultValue={ArticlesDetailFormDefaults.name}
            slotProps={{ htmlInput: { ...ArticlesDetailFormValidations.name } }}
            fullWidth
          />
        }
        isRequired
      />
      <FormField
        name={ArticlesDetailFormKeys.type}
        label={t('label.type')}
        field={
          <Select
            defaultValue={ArticlesDetailFormDefaults.type}
            slotProps={{ input: { ...ArticlesDetailFormValidations.type } }}
            items={typeOptionsItems}
            sx={{
              width: {
                xs: '100%',
                md: '250px',
              },
            }}
          />
        }
        isRequired
      />
      <Stack>
        <ControlledSwitch name={ArticlesDetailFormKeys.active} label={t('label.active')} />
      </Stack>
      <Divider />
      <Stack
        direction="row"
        gap={2}
        sx={{
          width: '100%',
          display: isTypeEvent ? 'flex' : 'none',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <ControlledDatePicker
          name={ArticlesDetailFormKeys.startDate}
          label={t('label.startDate')}
          fieldProps={{
            isRequired: true,
            boxProps: {
              sx: {
                width: {
                  xs: '100%',
                  sm: '50%',
                },
              },
            },
          }}
        />
        <ControlledDatePicker
          name={ArticlesDetailFormKeys.endDate}
          label={t('label.endDate')}
          fieldProps={{
            isRequired: true,
            boxProps: {
              sx: {
                width: {
                  xs: '100%',
                  sm: '50%',
                },
              },
            },
          }}
          minDate={getTypedDate(startDate)}
        />
      </Stack>
      {isTypeEvent && <Divider />}
      <LocalesContainerField
        locales={locales}
        locale={locale}
        onChange={onLocaleChange}
        renderLocale={(loc) => {
          const fieldPrefix = `${ArticlesDetailFormKeys.locale}[${loc}]`;

          return (
            <Stack key={loc} gap={2} sx={{ display: loc !== locale ? 'none' : 'flex' }}>
              <FormField
                name={`${fieldPrefix}.${ArticlesDetailFormKeys.title}`}
                label={t('label.title')}
                field={
                  <Input
                    defaultValue={ArticlesDetailFormDefaults.title}
                    slotProps={{ htmlInput: { ...ArticlesDetailFormValidations.title } }}
                    fullWidth
                  />
                }
                isRequired
              />
              <FormField
                name={`${fieldPrefix}.${ArticlesDetailFormKeys.description}`}
                label={t('label.description')}
                field={
                  <Input
                    defaultValue={ArticlesDetailFormDefaults.description}
                    slotProps={{ htmlInput: { ...ArticlesDetailFormValidations.description } }}
                    rows={5}
                    multiline
                    fullWidth
                  />
                }
              />
              <ControlledWysiwygEditor
                name={`${fieldPrefix}.${ArticlesDetailFormKeys.content}`}
                label={t('label.content')}
                isRequired
              />
            </Stack>
          );
        }}
      />
    </DetailDrawerForm>
  );
};

export default ArticlesDetailForm;
