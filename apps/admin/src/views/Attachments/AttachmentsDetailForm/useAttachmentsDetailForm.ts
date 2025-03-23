import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IAttachmentsDetailForm } from './types';
import { AttachmentsDetailFormSchema } from './schema';

export const useAttachmentsDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IAttachmentsDetailForm>({
    resolver: zodResolver(AttachmentsDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IAttachmentsDetailForm> = (data) => {
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
