import { cookies } from 'next/headers';

export type UserProfile = {
  name: string;
  email: string;
};

export async function getUserProfile(): Promise<UserProfile | null> {
  const cookieStore = await cookies();
  const user = cookieStore.get('user');

  if (!user) {
    return null;
  }

  return JSON.parse(user.value);
}
