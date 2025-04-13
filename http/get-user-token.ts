'use server';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';

export async function getUserToken() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  return await decrypt(session);
}
