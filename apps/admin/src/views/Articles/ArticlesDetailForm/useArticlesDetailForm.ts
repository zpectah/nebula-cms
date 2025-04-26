import { useEffect, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useArticlesQuery, useFormDetailControl } from '../../../hooks';
import { newItemKey } from '../../../enums';
import { IArticlesDetailForm } from './types';
import { ArticlesDetailFormSchema } from './schema';
import { getNewArticlesItem } from './helpers';

export const useArticlesDetailForm = (id: string | undefined) => {
  const { locale, setDefaultLocale, isProcessing, setProcessing, locales, localesDefault } = useFormDetailControl();
  const form = useForm<IArticlesDetailForm>({
    mode: 'all',
    resolver: zodResolver(ArticlesDetailFormSchema),
  });
  const { articlesDetailQuery } = useArticlesQuery(id);

  const { data: detailData, isLoading } = articlesDetailQuery;

  const isFormValid = form.formState.isValid;

  const title = useMemo(() => (id === newItemKey ? 'New article' : detailData?.name), [id, detailData]);

  const submitHandler: SubmitHandler<IArticlesDetailForm> = (data) => {
    setProcessing(true);

    console.log('data', data);
    // TODO

    setProcessing(false);
  };

  const deleteHandler = () => {
    setProcessing(true);

    // Confirmed action
    // Set 'deleted' attribute to 'true' and send request same as update
    console.log('data', 'id položky ...', detailData);
    // TODO

    setProcessing(false);
  };

  useEffect(() => {
    if (form.formState.errors) {
      console.log(form.formState.errors);
    }
  }, [form.formState]);

  useEffect(() => {
    if (id === newItemKey) {
      form.reset(getNewArticlesItem(locales));
    } else if (detailData) {
      form.reset(detailData);
    }
  }, [id, detailData]);

  return {
    // detailData,
    form,
    isLoading,
    isProcessing,
    isFormValid,
    locale,
    locales,
    onLocaleChange: setDefaultLocale,
    onSubmit: form.handleSubmit(submitHandler),
    onDelete: deleteHandler,
    title,
  };
};
