'use client';

import { ButtonSaveData } from '@/components/ui/button-save-data';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateProfileSchema } from '@/shared/schema/update-profile';
import { z } from 'zod';
import { updateUser, User } from '@/http/user';
import { useAuth } from '@/providers/auth';
import { FeedbackMessage } from '@/components/ui/feedback-message';
import { useEffect, useState } from 'react';

export function ProfileForm() {
  const { user, setUser } = useAuth();

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(updateProfileSchema),
  });
  const [feedbackMessage, setFeedbackMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = (values: z.infer<typeof updateProfileSchema>) => {
    if (!user) return;
    const userUpdated = {
      ...user,
      name: values.name,
      email: values.email,
    };

    const response = updateUser(userUpdated);

    setFeedbackMessage(response);
    setUser(userUpdated);
  };

  useEffect(() => {
    form.reset({
      name: user?.name,
      email: user?.email,
    });
  }, [user]);

  return (
    <div className={'flex flex-col gap-6'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className='grid gap-6'>
            <div className='grid gap-6'>
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input type='text' placeholder='Seu nome' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='Seu email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <ButtonSaveData>Atualizar</ButtonSaveData>

              {feedbackMessage && (
                <FeedbackMessage
                  type={feedbackMessage?.success ? 'success' : 'error'}
                >
                  {feedbackMessage?.message}
                </FeedbackMessage>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
