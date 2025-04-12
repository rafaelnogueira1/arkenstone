import { cookies } from 'next/headers';

export async function getUserProfile() {
  const cookieStore = await cookies();
  const user = cookieStore.get('user');

  if (!user) {
    return null;
  }

  return JSON.parse(user.value);
}
