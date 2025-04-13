'use server';

import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export async function login(userId: string) {
  await createSession(userId);

  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/');
}
