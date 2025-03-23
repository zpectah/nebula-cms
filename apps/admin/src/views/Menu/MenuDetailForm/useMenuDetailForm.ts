import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMenuDetailForm } from './types';
import { MenuDetailFormSchema } from './schema';

export const useMenuDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IMenuDetailForm>({
    resolver: zodResolver(MenuDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IMenuDetailForm> = (data) => {
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
