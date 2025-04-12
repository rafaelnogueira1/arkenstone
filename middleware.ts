import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/session';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/register'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  const cookieStore = await cookies();
  const cookie = cookieStore.get('session')?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}
