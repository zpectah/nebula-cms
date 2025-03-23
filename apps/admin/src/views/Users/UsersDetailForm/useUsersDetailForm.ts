import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IUsersDetailForm } from './types';
import { UsersDetailFormSchema } from './schema';

export const useUsersDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IUsersDetailForm>({
    resolver: zodResolver(UsersDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IUsersDetailForm> = (data) => {
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
