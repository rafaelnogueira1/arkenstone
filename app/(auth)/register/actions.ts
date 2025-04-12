'use server';

import { registerSchema } from '@/shared/schema/register';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function register(_: any, formData: FormData) {
  const validateFields = registerSchema.safeParse(Object.fromEntries(formData));

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;

  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
  };

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  const cookieStore = await cookies();

  cookieStore.set('user', JSON.stringify(user), {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  });

  redirect('/');
}
