import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema } from './schema';
import { ILoginForm } from './types';

export const useLoginForm = () => {
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();
  const form = useForm<ILoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

  const submitHandler: SubmitHandler<ILoginForm> = (data) => {
    setProcessing(true);

    console.log('data', data);
    // TODO
    navigate('/dashboard');

    setProcessing(false);
  };

  return {
    processing,
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
