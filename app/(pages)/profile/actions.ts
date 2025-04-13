'use server';

import { getUserProfile } from '@/http/actions/user-profile';
import { User } from '@/http/user';
import { updateProfileSchema } from '@/shared/schema/update-profile';
import { cookies } from 'next/headers';

export type UpdateUserProfile =
  | User
  | { errors: { name?: string[] | string; email?: string[] | string } };

export async function updateUserProfile(
  _: any,
  formData: FormData
): Promise<UpdateUserProfile> {
  const validateFields = updateProfileSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email } = validateFields.data;

  const user = await getUserProfile();

  if (!user) {
    return {
      errors: {
        name: 'Usuário não encontrado',
      },
    };
  }

  const updatedUser = {
    ...user,
    name,
    email,
  };

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  const cookieStore = await cookies();

  cookieStore.set('user', JSON.stringify(updatedUser), {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  });

  return updatedUser;
}
