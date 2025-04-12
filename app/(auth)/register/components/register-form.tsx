'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { register } from '../actions';
import { useActionState } from 'react';
import { ButtonRegister } from './button-register';
import { ErrorMessage } from '@/components/ui/error-message';

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [state, formAction] = useActionState(register, null);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Crie uma conta</CardTitle>
          <CardDescription>Crie uma conta para começar</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className='grid gap-6'>
              <div className='grid gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='name'>Nome</Label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Seu nome'
                  />
                  {state?.errors?.name && (
                    <ErrorMessage>{state.errors.name}</ErrorMessage>
                  )}
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Seu melhor email'
                  />
                  {state?.errors?.email && (
                    <ErrorMessage>{state.errors.email}</ErrorMessage>
                  )}
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='password'>Senha</Label>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Sua senha'
                  />
                  {state?.errors?.password && (
                    <ErrorMessage>{state.errors.password}</ErrorMessage>
                  )}
                </div>
                <ButtonRegister>Criar conta</ButtonRegister>
              </div>
              <div className='text-center text-sm'>
                Já tem uma conta?{' '}
                <a href='/' className='underline underline-offset-4'>
                  Faça login
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
