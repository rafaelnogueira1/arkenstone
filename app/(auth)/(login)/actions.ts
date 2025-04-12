'use server';

import { loginSchema } from '@/shared/schema/login';
import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const testUser = {
  id: '1',
  email: 'rafael@test.com',
  password: '12345678',
};

export async function login(_: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const cookieStore = await cookies();

  const user = cookieStore.get('user');

  if (!user) {
    return { errors: { email: ['Usuário não encontrado'] } };
  }

  const userData = JSON.parse(user.value);

  if (
    userData.email !== validatedFields.data.email ||
    userData.password !== validatedFields.data.password
  ) {
    return { errors: { email: ['Email ou senha inválidos'] } };
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  await createSession(userData.id);

  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/');
}
