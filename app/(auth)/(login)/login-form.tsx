'use client';

import { useActionState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from './actions';
import { ErrorMessage } from '@/components/ui/error-message';
import { ButtonSaveData } from '@/components/ui/button-save-data';
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [state, formAction] = useActionState(login, undefined);

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Bem-vindo de volta</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className='grid gap-6'>
              <div className='grid gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='m@example.com'
                  />
                  {state?.errors?.email && (
                    <ErrorMessage>{state.errors.email}</ErrorMessage>
                  )}
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Senha</Label>
                  </div>
                  <Input id='password' name='password' type='password' />
                  {state?.errors?.password && (
                    <ErrorMessage>{state.errors.password}</ErrorMessage>
                  )}
                </div>
                <ButtonSaveData>Login</ButtonSaveData>
              </div>
              <div className='text-center text-sm'>
                Não tem uma conta?{' '}
                <a href='/register' className='underline underline-offset-4'>
                  Criar conta
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
