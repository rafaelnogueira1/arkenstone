'use server';

import { deleteSession } from '@/lib/session';

export async function clearSession() {
  await deleteSession();
}
