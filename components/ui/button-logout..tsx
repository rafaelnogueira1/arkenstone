'use client';
import { logout } from '@/app/(auth)/(login)/actions';
import { LogOut } from 'lucide-react';

export function ButtonLogout({ children }: { children: React.ReactNode }) {
  return (
    <button
      onClick={logout}
      className='flex gap-2 items-center text-sm text-slate-500 font-semibold uppercase h-[70px] rounded-sm cursor-pointer'
    >
      <LogOut className='size-4' />
      {children}
    </button>
  );
}
