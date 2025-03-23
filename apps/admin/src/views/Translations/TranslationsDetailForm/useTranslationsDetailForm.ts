import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ITranslationsDetailForm } from './types';
import { TranslationsDetailFormSchema } from './schema';

export const useTranslationsDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<ITranslationsDetailForm>({
    resolver: zodResolver(TranslationsDetailFormSchema),
  });

  const submitHandler: SubmitHandler<ITranslationsDetailForm> = (data) => {
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
