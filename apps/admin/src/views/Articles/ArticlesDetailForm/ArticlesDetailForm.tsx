import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm, Input, FormField } from '../../../components';
import { useArticlesQuery } from '../../../hooks';
import { newItemKey } from '../../../enums';
import { IArticlesDetailForm } from './types';
import { useArticlesDetailForm } from './useArticlesDetailForm';
import { ArticlesDetailFormKeys, ArticlesDetailFormDefaults, ArticlesDetailFormValidations } from './constants';

const ArticlesDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useArticlesDetailForm();
  const { articlesDetailQuery } = useArticlesQuery(id);

  const { routes } = config;
  const { formState } = form;
  const { data, isLoading } = articlesDetailQuery;

  const drawerTitle = useMemo(() => {
    return id === newItemKey ? 'New article' : data?.title;
  }, [id, data]);

  return (
    <DetailDrawerForm<IArticlesDetailForm>
      root={routes.articles.path}
      id={id}
      formProps={{
        form,
        formProps: { onSubmit },
      }}
      title={drawerTitle}
      isLoading={isLoading}
    >
      <div>
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
      <FormField
        name={ArticlesDetailFormKeys.name}
        label={'name'}
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
        label={'type'}
        field={
          <Input
            defaultValue={ArticlesDetailFormDefaults.type}
            slotProps={{ htmlInput: { ...ArticlesDetailFormValidations.type } }}
            fullWidth
          />
        }
        isRequired
      />
    </DetailDrawerForm>
  );
};

export default ArticlesDetailForm;
