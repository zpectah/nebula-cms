import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Divider } from '@mui/material';
import { articlesTypeKeys } from '@core';
import config from '../../../config';
import {
  DetailDrawerForm,
  DetailLocaleToggle,
  Input,
  Select,
  FormField,
  ControlledSwitch,
  ControlledWysiwygEditor,
} from '../../../components';
import { useSelectItems } from '../../../hooks';
import { IArticlesDetailForm } from './types';
import { useArticlesDetailForm } from './useArticlesDetailForm';
import { ArticlesDetailFormKeys, ArticlesDetailFormDefaults, ArticlesDetailFormValidations } from './constants';

const ArticlesDetailForm = () => {
  const { id } = useParams();
  const { t } = useTranslation('form');
  const { form, isLoading, locale, locales, onLocaleChange, onSubmit, onDelete, title } = useArticlesDetailForm(id);

  const typeOptionsItems = useSelectItems(Object.keys(articlesTypeKeys));

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
            sx={{ width: '250px' }}
          />
        }
        isRequired
      />
      <Stack>
        <ControlledSwitch name={ArticlesDetailFormKeys.active} label={t('label.active')} />
      </Stack>
      <Divider />
      <DetailLocaleToggle locales={locales} locale={locale} onChange={onLocaleChange} />
      {locales.map((loc: string) => {
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
      })}
    </DetailDrawerForm>
  );
};

export default ArticlesDetailForm;
