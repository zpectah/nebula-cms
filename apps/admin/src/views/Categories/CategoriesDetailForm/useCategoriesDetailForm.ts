import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ICategoriesDetailForm } from './types';
import { CategoriesDetailFormSchema } from './schema';

export const useCategoriesDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<ICategoriesDetailForm>({
    resolver: zodResolver(CategoriesDetailFormSchema),
  });

  const submitHandler: SubmitHandler<ICategoriesDetailForm> = (data) => {
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
