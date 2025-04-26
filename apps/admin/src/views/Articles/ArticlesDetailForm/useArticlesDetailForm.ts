import { useEffect, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useArticlesQuery, useFormDetailControl } from '../../../hooks';
import { newItemKey } from '../../../enums';
import { IArticlesDetailForm } from './types';
import { ArticlesDetailFormSchema } from './schema';
import { getNewArticlesItem } from './helpers';

export const useArticlesDetailForm = (id: string | undefined) => {
  const { t } = useTranslation();
  const { locale, setDefaultLocale, isProcessing, setProcessing, locales } = useFormDetailControl();
  const form = useForm<IArticlesDetailForm>({
    resolver: zodResolver(ArticlesDetailFormSchema),
  });
  const { articlesDetailQuery } = useArticlesQuery(id);

  const { data: detailData, isLoading } = articlesDetailQuery;

  const isFormValid = form.formState.isValid;

  const title = useMemo(() => (id === newItemKey ? t('newItem.articles') : detailData?.name), [id, detailData]);

  const submitHandler: SubmitHandler<IArticlesDetailForm> = (data) => {
    if (!data) return;

    setProcessing(true);

    const master = Object.assign({
      ...data,
    });

    if (master.id === 0) {
      // TODO
      console.log('create new data', 'new', master.id, master);
      setProcessing(false);
      // TODO
    } else {
      // TODO
      console.log('update existing data', master.id, master);
      setProcessing(false);
      // TODO
    }
  };

  const deleteHandler = () => {
    const data = form.getValues();

    if (!data) return;

    setProcessing(true);

    const master = Object.assign({
      ...data,
      deleted: 1,
    });

    // TODO
    console.log('delete: master data', master);
    setProcessing(false);
    // TODO
  };

  useEffect(() => {
    if (id === newItemKey) {
      form.reset(getNewArticlesItem(locales));
    } else if (detailData) {
      form.reset(detailData);
    }
  }, [id, detailData]);

  return {
    detailData,
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
