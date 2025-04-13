'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ButtonSaveData } from '@/components/ui/button-save-data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { loginSchema } from '@/shared/schema/login';
import { z } from 'zod';
import { FeedbackMessage } from '@/components/ui/feedback-message';
import { loginUser } from '@/http/login';
import { useAuth } from '@/providers/auth';
export function LoginForm() {
  const [loginMessageError, setLoginMessageError] = useState('');
  const { setUser } = useAuth();

  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    const response = loginUser(values);

    if (response?.message) {
      setLoginMessageError(response.message);
    }

    setUser(response?.user);
  };

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Bem-vindo de volta</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className='grid gap-6'>
                <div className='grid gap-6'>
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
                  <div className='grid gap-2'>
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input
                              type='password'
                              placeholder='Sua senha'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <ButtonSaveData>Login</ButtonSaveData>
                </div>
                {loginMessageError && (
                  <FeedbackMessage type='error'>
                    {loginMessageError}
                  </FeedbackMessage>
                )}
                <div className='text-center text-sm'>
                  Não tem uma conta?{' '}
                  <a href='/register' className='underline underline-offset-4'>
                    Criar conta
                  </a>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
