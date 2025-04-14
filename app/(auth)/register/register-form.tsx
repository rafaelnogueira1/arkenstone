'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ButtonSaveData } from '@/components/ui/button-save-data';
import { redirect } from 'next/navigation';
import { registerSchema } from '@/shared/schema/register';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { registerUser } from '@/http/user';
import Link from 'next/link';
import { FeedbackMessage } from '@/components/ui/feedback-message';
import { useState, useTransition } from 'react';

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(registerSchema),
  });
  const [feedback, setFeedback] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      const response = registerUser(values);

      if (response?.success) {
        redirect('/');
      }

      setFeedback({
        message: response?.message,
        type: 'error',
      });
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Crie uma conta</CardTitle>
          <CardDescription>Crie uma conta para começar</CardDescription>
        </CardHeader>
        <CardContent>
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
                            <Input
                              type='text'
                              placeholder='Seu nome'
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
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type='email'
                              placeholder='Seu melhor email'
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
                  <ButtonSaveData isPending={isPending}>
                    Criar conta
                  </ButtonSaveData>
                </div>
                <div className='text-center text-sm'>
                  Já tem uma conta?{' '}
                  <Link href='/' className='underline underline-offset-4'>
                    Faça login
                  </Link>
                </div>
                {feedback && (
                  <FeedbackMessage type={feedback.type}>
                    {feedback.message}
                  </FeedbackMessage>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
