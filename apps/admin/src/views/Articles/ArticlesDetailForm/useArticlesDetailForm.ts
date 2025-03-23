import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IArticlesDetailForm } from './types';
import { ArticlesDetailFormSchema } from './schema';

export const useArticlesDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IArticlesDetailForm>({
    resolver: zodResolver(ArticlesDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IArticlesDetailForm> = (data) => {
    setProcessing(true);

    console.log('data', data);
    // TODO

    setProcessing(false);
  };

  return {
    processing,
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
