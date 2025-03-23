import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ITagsDetailForm } from './types';
import { TagsDetailFormSchema } from './schema';

export const useTagsDetailForm = () => {
  const [processing, setProcessing] = useState(false);

  const form = useForm<ITagsDetailForm>({
    resolver: zodResolver(TagsDetailFormSchema),
  });

  const submitHandler: SubmitHandler<ITagsDetailForm> = (data) => {
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
