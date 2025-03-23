import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IPagesDetailForm } from './types';
import { PagesDetailFormSchema } from './schema';

export const usePagesDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IPagesDetailForm>({
    resolver: zodResolver(PagesDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IPagesDetailForm> = (data) => {
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
