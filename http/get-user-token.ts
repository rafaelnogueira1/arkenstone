'use server';
import { getSession } from '@/lib/session';

export async function getUserToken() {
  return getSession();
}
