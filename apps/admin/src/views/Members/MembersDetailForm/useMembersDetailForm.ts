import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMembersDetailForm } from './types';
import { MembersDetailFormSchema } from './schema';

export const useMembersDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IMembersDetailForm>({
    resolver: zodResolver(MembersDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IMembersDetailForm> = (data) => {
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
