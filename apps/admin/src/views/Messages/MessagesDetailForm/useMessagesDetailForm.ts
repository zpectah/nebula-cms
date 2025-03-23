import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMessagesDetailForm } from './types';
import { MessagesDetailFormSchema } from './schema';

export const useMessagesDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<IMessagesDetailForm>({
    resolver: zodResolver(MessagesDetailFormSchema),
  });

  const submitHandler: SubmitHandler<IMessagesDetailForm> = (data) => {
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
