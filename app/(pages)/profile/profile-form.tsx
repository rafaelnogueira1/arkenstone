'use client';

import { ButtonSaveData } from '@/components/ui/button-save-data';
import { ErrorMessage } from '@/components/ui/error-message';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserProfile } from '@/services/actions/user-profile';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { updateUserProfile, UpdateUserProfile } from './actions';

const hasErrors = (
  state: UpdateUserProfile
): state is {
  errors: { name?: string[] | string; email?: string[] | string };
} => {
  return 'errors' in state;
};

export function ProfileForm({ user }: { user: UserProfile | null }) {
  const [state, formAction] = useFormState<UpdateUserProfile, FormData>(
    updateUserProfile,
    user as UpdateUserProfile
  );

  const [values, setValues] = useState({
    name: user?.name,
    email: user?.email,
  });

  return (
    <div className={'flex flex-col gap-6'}>
      <form action={formAction}>
        <div className='grid gap-6'>
          <div className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Nome</Label>
              <Input
                id='name'
                name='name'
                type='text'
                value={values.name}
                placeholder='Seu nome'
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
              />
              {hasErrors(state) && state.errors.name && (
                <ErrorMessage>{state.errors.name}</ErrorMessage>
              )}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={values.email}
                placeholder='Seu melhor email'
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
              />
              {hasErrors(state) && state.errors.email && (
                <ErrorMessage>{state.errors.email}</ErrorMessage>
              )}
            </div>
            <ButtonSaveData>Atualizar</ButtonSaveData>
          </div>
        </div>
      </form>
    </div>
  );
}
